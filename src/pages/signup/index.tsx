import { Button } from "../../component/button";
import { FieldValues, useForm } from "react-hook-form";
import PhoneInput, { CountryData } from "react-phone-input-2";
import post from "../../HTTP/post";
import "./styles.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../custome-hooks/redux";
import { initializeUser } from "../../store/slices/user/userSlice";
import { TSignUpresponse } from "../../types/response";
import Loader from "../../component/loader";
import cn from "classnames";
import { changeModal } from "../../store/slices/modal/modalSlice";

type Inputs = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmpassword: string;
  otp: string;
};

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [recievedOTP, setRecievedOTP] = useState<null | boolean>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const { name, email, password, otp, confirmpassword } = data;
    const code = countryCode;
    const numberWithCode = phoneNumber;
    const numberWithoutCode = `+${numberWithCode}`.replace(`+${code}`, "");
    if (!recievedOTP) {
      const body = {
        name,
        email,
        phoneNumber: numberWithoutCode,
        countryCode: `+${countryCode}`,
        password,
      };
      if (password === confirmpassword) {

        try {
          const response: any = await post("user/signup", body);
          if (response.status === 200) {
            setRecievedOTP(true);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.error('password need to match')
      }
    } else {
      const body = {
        phoneNumber: numberWithoutCode,
        countryCode: `+${countryCode}`,
        otp,
      };
      try {
        const response: TSignUpresponse = await post("user/otp/verify", body);
        console.log(response, "response");
        if (response.status === 200) {
          const { _id, name, email, phoneNumber, countryCode, isBlock } =
            response.data.userData;
          const user = { _id, name, email, phoneNumber, countryCode, isBlock };
          localStorage.setItem("backtest_Toke", response.data.token);
          dispatch(
            initializeUser({
              data: { userBasic: user, token: response.data.token },
            })
          );
          toast.success("Succesfuly Register");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="input_text">
        <label htmlFor="signup_Name" className="form_Labels">
          Name
        </label>
        <input
          type="text"
          className="inputClass"
          id="signup_Name"
          placeholder="Enter Your Name here"
          {...register("name", {
            required: true,
          })}
        />

        {!recievedOTP && (
          <>
            <label htmlFor="signup_Email" className="form_Labels">
              Email
            </label>
            <input
              type="email"
              className="inputClass"
              id="signup_Email"
              placeholder="Enter Your email here"
              {...register("email", {
                required: true,
              })}
            />
          </>
        )}

        <label htmlFor="signup_Number" className="form_Labels">
          Phone No:
        </label>
        <div className="phone_Input_Wrapper">
          <PhoneInput
            country={"us"}
            value={phoneNumber}
            onChange={(value, country) => {
              setPhoneNumber(value);
              setCountryCode((country as CountryData).dialCode);
            }}
          />
        </div>

        {!recievedOTP && (
          <>
            <label htmlFor="signup_Password" className="form_Labels">
              Password
            </label>
            <input
              type="password"
              className="inputClass"
              id="signup_Password"
              placeholder="Enter Your password Here"
              {...register("password", {
                required: true,
              })}
            />
            <label htmlFor="signup_CPassword" className="form_Labels">
              Confirm
            </label>
            <input
              type="text"
              className="inputClass"
              id="signup_CPassword"
              placeholder="This need to same as password"
              {...register("confirmpassword", {
                required: true,
              })}
            />
          </>
        )}

        {!!recievedOTP && (
          <>
            <label htmlFor="signup_OTP" className="form_Labels">
              otp
            </label>
            <input
              type="text"
              className="inputClass"
              id="signup_OTP"
              placeholder="This need to same as password"
              {...register("otp")}
            />
          </>
        )}

        <div className="text-center my-4">
          <Button
            className={cn(
              "auth_Active",
              isSubmitting && "btn_Disable  cursor-not-allowed"
            )}
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? (
              <Loader />
            ) : recievedOTP ? (
              "Varify OTP"
            ) : (
              "Get OTP"
            )}
          </Button>
        </div>
        <p className="text-center mb-2 text_Light">or</p>
        <p className="text-center text_Light">
          Already Have Account?
          {" "}
          <span className="text-blue-500 cursor-pointer" onClick={() => dispatch(changeModal({ data: 'login' }))}>
            Sign In
          </span>
        </p>
      </form>
    </>
  );
};

export default SignUp;
