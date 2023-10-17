import "./home.scss";
import { Button } from "../../component/button";
import { useAppDispatch, useAppSelector } from "../../custome-hooks/redux";
import { useState } from "react";
import subscriptionData from "./components/subscription-plan/data";
import SubscriptionPlan from "./components/subscription-plan";
import SignUp from "../signup";
import Forgotpassword from "../forgot-password";
import LogIn from "../login";
import { changeModal } from "../../store/slices/modal/modalSlice";
import cn from "classnames";

function LandingPage() {
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const modal = useAppSelector((state) => state.modal.modal);
  const [activeSub, setActiveSub] = useState(-1);
  const dispatch = useAppDispatch();
  const whichModalShow = () => {
    if (modal === 'signup') {
      return <SignUp />
    } else if (modal === 'forgot') {
      return <Forgotpassword />
    }
    return <LogIn />
  }

  return (
    <>
      <div className="home_banner_wrpper mb-10 bg-gray-100">
        <div className="banner_wrapper">
          <div className="container">
            <div className="content_mt">
              <div className="lg:flex lg:justify-between lg:items-center home_Banner" id='main'>
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
                <div>
                  {!isLoggedIn && (
                    <div className="card_box bg-white rounded-lg shadow-md p-4 lg:p-12">
                      <h3 className="card_title text-2xl text-center font-semibold mb-8 capitalize">
                        {modal}
                      </h3>
                      {modal !== 'forgot' && <div className="login_signup flex">
                        <Button className={cn(modal === 'login' ? 'primaryBtn' : 'signup_btn', 'flex-1')} onClick={() => dispatch(changeModal({ data: 'login' }))}
                        >Login</Button>
                        <Button
                          className={cn(modal === 'signup' ? 'primaryBtn' : 'signup_btn', 'flex-1')}
                          onClick={() => dispatch(changeModal({ data: 'signup' }))}
                        >
                          Sign Up
                        </Button>
                      </div>}
                      {
                        whichModalShow()
                      }
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
