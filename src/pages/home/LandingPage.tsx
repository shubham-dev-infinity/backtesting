import "./home.scss"
import { Button } from '../../component/button'


function LandingPage() {
    return (
        <>
            <div className='home_banner_wrpper'>
                <div className='banner_wrapper'>
                    <div className='container'>
                        <div className='content_mt'>
                            <div className='row align-items-center'>
                                <div className='col-lg-7'>
                                    <h1 className='banner_head position-relative inline'>Let’s Go To your <br />
                                        <span>Backtesting</span> Here
                                        <img src='/assets/img/starimg.png' alt='star' className='starImg' />
                                    </h1>
                                    <h3 className='banner_grayTxt'>(Banknifty & Nifty) </h3>
                                </div>
                                <div className='col-lg-5'>
                                    <div className="card_box">
                                        <h3 className="card_title">Login</h3>
                                        <div className="login_signup">
                                            <Button className="primaryBtn" children={"Login"} />
                                            <Button className="signup_btn" children={"Sing Up"} />
                                        </div>
                                        <div className="input_text">
                                            <div className="e_mail">
                                                <h5>Email</h5>
                                                <input className='inputClass' type="text" placeholder="Enter your Email here" name="mail" />
                                            </div>
                                            <div className="e_mail">
                                                <h5>Password</h5>
                                                <input className='inputClass' type="password" placeholder="Enter your Email here" name="mail" />
                                            </div>
                                            <p className="forgot_text">Forgot Password?</p>
                                        </div>
                                        <div className="main_btn">
                                            <Button className="btn_wrap" children={"Login"} />
                                            <p className="btn_wrap_text">Or</p>
                                            <p className="btn_wrap_text">Don’t have an account? <span className="signup_mark">SignUp</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="about_text">
                        <div className="text_underline">
                            <h2 className="under_text">About Backtesting</h2>
                        </div>
                        <h5 className="back_testing">Backtesting lets you look at your strategies on chronicled information to decide
                            how well it would have
                            worked within the past.
                            In case you've got created a technique with which you're prepared to go live, the Backtesting highlight
                            will assist
                            you to get it in the event that your strategies are reasonable and possibly effective.</h5>
                        <h5 className="back_testing">Backtesting lets you look at your strategies on chronicled information to decide how well it would have
                            worked within the past.
                            In case you've got created a technique with which you're prepared to go live, the Backtesting highlight
                            will assist
                            you to get it in the event that your strategies are reasonable and possibly effective.</h5>
                        <h5 className="back_testing">Backtesting lets you look at your strategies on chronicled information to decide how well it would have
                            worked within the past.
                            In case you've got created a technique with which you're prepared to go live, the Backtesting highlight
                            will assist
                            you to get it in the event that your strategies are reasonable and possibly effective.</h5>
                        <h5 className="back_testing">Backtesting lets you look at your strategies on chronicled information to decide how well it would have
                            worked within the past.
                            In case you've got created a technique with which you're prepared to go live, the Backtesting highlight
                            will assist
                            you to get it in the event that your strategies are reasonable and possibly effective.</h5>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="feature_line">
                        <h2 className="feature_txt">Features</h2>
                    </div>
                    <div className='row g-5'>
                        <div className='col-lg-6'>
                            <img src='/assets/img/feature1.png' alt='star' />
                        </div>
                        <div className='col-lg-6'>
                            <h5 className="featureTxt">The app offers a vast collection of safety talks
                                tailored specifically for the construction and
                                marine industries. Workers can easily search
                                and browse through the library to find relevant
                                topics and materials for their safety briefings.
                                This app provides a comprehensive solution for
                                promoting safety awareness and compliance.</h5>
                        </div>
                        <div className='col-lg-6'>
                            <h5 className="featureTxt">The app offers a vast collection of safety talks
                                tailored specifically for the construction and
                                marine industries. Workers can easily search
                                and browse through the library to find relevant
                                topics and materials for their safety briefings.
                                This app provides a comprehensive solution for
                                promoting safety awareness and compliance.</h5>
                        </div>
                        <div className='col-lg-6'>
                            <img src='/assets/img/feature2.png' alt='star' />
                        </div>
                        <div className='col-lg-6'></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="get_wrap">
                        <div className="get_underline">
                            <h2 className="get_text">Get To Know us</h2>
                        </div>
                        <h5 className="know_us_text">We are here to serve you in the best possible way. Do let us know your
                            feedback or your query. We are happy to help you always.</h5>
                        <div className="know_us">
                            <Button className="email_us" children={'Email Us'} />
                        </div>
                        <h5 className="email_us_text">Exalgo Infotech Pvt. Ltd.</h5>
                        <h5 className="email_us_text">Address: Surat, Gujrat, India</h5>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage