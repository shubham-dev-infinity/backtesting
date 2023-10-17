import { Button } from "../../component/button";
import "./styles.scss";
import post from "../../HTTP/post";
import { useState } from "react";
import { useAppDispatch } from "../../custome-hooks/redux";
import { initializeUser } from "../../store/slices/user/userSlice";
import { toast } from "react-toastify";
import cn from "classnames";
import Loader from "../../component/loader";
import { changeModal } from "../../store/slices/modal/modalSlice";

const LogIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFields, setFormFields] = useState({
    userId: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    const body = formFields;
    setIsSubmitting(true);
    if (formFields.userId && formFields.password) {
      try {
        const response: any = await post("user/login", body);
        console.log(response);

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
          toast.success(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Enter Valid Username OR Password");
    }
    setIsSubmitting(false);
  };
  return (
    <>
      <div className="input_text">
        <div className="e_mail">
          <label htmlFor="login_mail" className="form_Labels">
            Email
          </label>
          <input
            id="login_mail"
            className="inputClass"
            type="email"
            placeholder="Enter your Email here"
            name="userId"
            value={formFields.userId}
            onChange={handleFormChange}
          />
        </div>
        <div className="e_mail">
          <label htmlFor="login_Password" className="form_Labels">
            Password
          </label>
          <input
            id="login_Password"
            className="inputClass"
            type="password"
            placeholder="Enter your Email here"
            name="password"
            value={formFields.password}
            onChange={handleFormChange}
          />
        </div>
        <p className="forgot_text cursor-pointer " onClick={() => dispatch(changeModal({ data: 'forgot' }))}>
          Forgot Password?
        </p>
      </div>
      <div className="main_btn">
        <Button
          className={cn(
            "auth_Active  mb-4",
            isSubmitting && "btn_Disable  cursor-not-allowed"
          )}
          disabled={isSubmitting}
          onClick={handleLogin}
        >
          {isSubmitting ? <Loader /> : "Log In"}
        </Button>
        <p className="btn_wrap_text">Or</p>
        <p className="btn_wrap_text">
          Don’t have an account?{" "}
          <span className="signup_mark cursor-pointer" onClick={() => dispatch(changeModal({ data: 'signup' }))}>
            SignUp
          </span>
        </p>
      </div >
    </>
  );
};

export default LogIn;
