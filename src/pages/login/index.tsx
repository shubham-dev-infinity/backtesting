import { Button } from "../../component/button";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import post from "../../HTTP/post";
import { useState } from "react";
import { useAppDispatch } from "../../custome-hooks/redux";
import { initializeUser } from "../../store/slices/user/userSlice";
import { toast } from "react-toastify";
import cn from "classnames";
import Loader from "../../component/loader";

const LogIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
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
          navigate("/");
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
      <section className="login_Wrapper">
        <div className="w-1/3 login">
          <div className="">
            <h3 className="card_title">Login</h3>
            <div className="w-full text-center mb-4 flex">
              <Button className="auth_Default_Btn flex-1">
                <Link to="/signup">Signup</Link>{" "}
              </Button>
              <Button className="auth_Active flex-1">Login</Button>
            </div>
            <div className="input_text">
              <div className="e_mail">
                <h5>Email</h5>
                <input
                  className="inputClass"
                  type="email"
                  placeholder="Enter your Email here"
                  name="userId"
                  value={formFields.userId}
                  onChange={handleFormChange}
                />
              </div>
              <div className="e_mail">
                <h5>Password</h5>
                <input
                  className="inputClass"
                  type="password"
                  placeholder="Enter your Email here"
                  name="password"
                  value={formFields.password}
                  onChange={handleFormChange}
                />
              </div>
              <p className="forgot_text">
                <Link to="/reset-password">Forgot Password?</Link>{" "}
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
                <span className="signup_mark">
                  <Link to={"/signup"}> SignUp</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
