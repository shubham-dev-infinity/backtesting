import "./home.scss";
import { Button } from "../../component/button";
import { useAppDispatch, useAppSelector } from "../../custome-hooks/redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import post from "../../HTTP/post";
import { toast } from "react-toastify";
import { initializeUser } from "../../store/slices/user/userSlice";
import subscriptionData from "./components/subscription-plan/data";
import SubscriptionPlan from "./components/subscription-plan";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const [activeSub, setActiveSub] = useState(-1);
  const [formFields, setFormFields] = useState({
    userId: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    const body = formFields;
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
  };

  return (
    <>
      <div className="home_banner_wrpper mb-10 bg-gray-100">
        <div className="banner_wrapper">
          <div className="container">
            <div className="content_mt">
              <div className="lg:flex lg:justify-between lg:items-center home_Banner">
                <div className="mb-8 lg:mb-0 flex_2 text-center lg:text-left md:leading-10">
                  <h1 className="banner_head relative inline text-3xl lg:text-5xl font-semibold">
                    Let’s Go To your <br />
                    <span>Backtesting</span> Here
                    <img
                      src="/assets/img/starImg.png"
                      alt=""
                      className="starImg"
                    />
                  </h1>
                  <h3 className="banner_grayTxt">(Banknifty & Nifty) </h3>
                  <br />
                </div>
                <div className="">
                  {!isLoggedIn && (
                    <div className="card_box bg-white rounded-lg shadow-md p-6 lg:p-10">
                      <h3 className="card_title text-2xl text-center font-semibold mb-8">
                        Login
                      </h3>
                      <div className="login_signup flex">
                        <Button className="primaryBtn flex-1">Login</Button>
                        {/* <Button className="signup_btn flex-1">
                          <Link to="/signup">Sign Up</Link>
                        </Button> */}
                        <button
                          className="signup_btn flex-1"
                          onClick={() => navigate("/signup")}
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="input_text mt-5">
                        <div className="e_mail">
                          <h5 className="text-gray-500 text-base">Email</h5>
                          <input
                            className="inputClass w-full px-4 py-2 border-b border-gray-300"
                            type="email"
                            placeholder="Enter your Email here"
                            name="userId"
                            value={formFields.userId}
                            onChange={handleFormChange}
                          />
                        </div>
                        <div className="e_mail">
                          <h5 className="text-gray-500 text-base">Password</h5>
                          <input
                            className="inputClass w-full px-4 py-2 border-b border-gray-300"
                            type="password"
                            placeholder="Enter your Email here"
                            name="password"
                            value={formFields.password}
                            onChange={handleFormChange}
                          />
                        </div>
                        <p className="forgot_text text-right">
                          <Link to="/reset-password">Forgot Password?</Link>{" "}
                        </p>
                      </div>
                      <div className="main_btn mt-10">
                        <Button
                          className="btn_wrap bg-blue-500 text-white w-full rounded-l"
                          onClick={handleLogin}
                        >
                          Login
                        </Button>
                        <p className="btn_wrap_text text-gray-500 text-base my-2">
                          Or
                        </p>
                        <p className="btn_wrap_text text-gray-500 text-base mb-10">
                          Don’t have an account?{" "}
                          <span className="signup_mark text-blue-500">
                            <Link to={"/signup"}>Sign Up</Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="backtesting" className="bg-white py-6 md:py-10 lg:py-14">
        <div className="container mx-auto sm:px-4">
          <div className="text-2xl font-semibold relative mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
              About Backtesting
            </h2>
            <div className="absolute h-3 w-3/12 bg-blue-500 rounded-full mb-16 mt-2 left-1/2 transform -translate-x-1/2 shadow-md backdrop-blur-md"></div>
          </div>
          <div className="text-center relative">
            {/* <p className="text-base md:text-lg lg:text-xl mt-10"> */}
              <h5 className="text-base md:text-lg lg:text-xl mb-4">
                Backtesting lets you look at your strategies on historical data
                to decide how well it would have worked within the past. In case
                you've got created a technique with which you're prepared to go
                live, the Backtesting highlight will assist you to get it in the
                event that your strategies are reasonable and possibly
                effective.
              </h5>
              <h5 className="text-base md:text-lg lg:text-xl mb-4">
                Backtesting lets you look at your strategies on historical data
                to decide how well it would have worked within the past. In case
                you've got created a technique with which you're prepared to go
                live, the Backtesting highlight will assist you to get it in the
                event that your strategies are reasonable and possibly
                effective.
              </h5>
              <h5 className="text-base md:text-lg lg:text-xl mb-4">
                Backtesting lets you look at your strategies on historical data
                to decide how well it would have worked within the past. In case
                you've got created a technique with which you're prepared to go
                live, the Backtesting highlight will assist you to get it in the
                event that your strategies are reasonable and possibly
                effective.
              </h5>
              <h5 className="text-base md:text-lg lg:text-xl mb-4">
                Backtesting lets you look at your strategies on historical data
                to decide how well it would have worked within the past. In case
                you've got created a technique with which you're prepared to go
                live, the Backtesting highlight will assist you to get it in the
                event that your strategies are reasonable and possibly
                effective.
              </h5>
            {/* </p> */}
          </div>
        </div>
      </section>
      <section id="Features" className="bg-white py-6 md:py-10 lg:py-14">
        <div className="container mx-auto">
          <div className="relative">
            <div className="text-2xl font-semibold relative mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                Features
              </h2>
              <div className="absolute h-3 w-4/12 bg-blue-500 rounded-full mb-16 mt-2 left-1/2 transform -translate-x-1/2 shadow-md backdrop-blur-md"></div>
            </div>
            <div className="md:flex lg:flex grid gap-x-8 mt-10">
              <div className="md:w-1/2 lg:w-1/2 flex items-center">
                <img
                  src="/assets/img/feature1.png"
                  alt="star"
                  className="w-full feature_Img"
                />
              </div>
              <div className="md:w-1/2 lg:w-1/2 flex items-center mt-6 md:mt-0 lg:mt-0 px-8">
                <h5 className="text-base md:text-lg lg:text-xl mb-4">
                  The app offers a vast collection of safety talks tailored
                  specifically for the construction and marine industries.
                  Workers can easily search and browse through the library to
                  find relevant topics and materials for their safety briefings.
                  This app provides a comprehensive solution for promoting
                  safety awareness and compliance.
                </h5>
              </div>
            </div>
            <div className="md:flex md:flex-row lg:flex mt-6 md:mt-0 lg:mt-0 flex flex-col-reverse">
              <div className="md:w-1/2 lg:w-1/2 flex items-center px-8">
                <h5 className="text-base md:text-lg lg:text-xl mb-4">
                  The app offers a vast collection of safety talks tailored
                  specifically for the construction and marine industries.
                  Workers can easily search and browse through the library to
                  find relevant topics and materials for their safety briefings.
                  This app provides a comprehensive solution for promoting
                  safety awareness and compliance.
                </h5>
              </div>
              <div className="md:w-1/2 lg:w-1/2 flex items-center">
                <img
                  src="/assets/img/feature2.png"
                  alt="star"
                  className="w-full feature_Img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="subscription" className="bg-white py-6 md:py-10 lg:py-14">
        <div className="container mx-auto">
          <div className="text-2xl font-semibold relative mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
              Subscription Plans
            </h2>
            <div className="absolute h-3 w-4/12 bg-blue-500 rounded-full mb-16 mt-2 left-1/2 transform -translate-x-1/2 shadow-md backdrop-blur-md"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
            {subscriptionData.map((sub, index) => (
              <SubscriptionPlan
                key={index}
                index={index}
                activeIndex={activeSub}
                duration={sub.duration}
                features={sub.features}
                price={sub.price}
                priceLabel={sub.priceLabel}
                selectSub={setActiveSub}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="contactus" className="bg-white py-6 md:py-10 lg:py-14">
        <div className="container mx-auto">
          <div className="relative">
            <div className="text-2xl font-semibold relative mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                Get To Know us
              </h2>
              <div className="absolute h-3 w-4/12 bg-blue-500 rounded-full mb-16 mt-2 left-1/2 transform -translate-x-1/2 shadow-md backdrop-blur-md"></div>
            </div>
            <h5 className="text-base md:text-lg lg:text-xl mb-10 p-12 text-center">
              We are here to serve you in the best possible way. Do let us know
              your feedback or your query. We are happy to help you always.
            </h5>
            <div className="flex justify-center mb-10 ">
              <Button className="email_us" children={"Email Us"} />
            </div>
            <h5 className="text-base md:text-lg lg:text-xl flex justify-center mb-2">
              Exalgo Infotech Pvt. Ltd.
            </h5>
            <h5 className="text-base md:text-lg lg:text-xl flex justify-center">
              Address: Surat, Gujarat, India
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
