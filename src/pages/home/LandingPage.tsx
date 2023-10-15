import "./home.scss"
import { Button } from '../../component/button'
import { useAppDispatch, useAppSelector } from "../../custome-hooks/redux"
import { Link } from "react-router-dom"
import { useState } from "react"
import post from "../../HTTP/post"
import { toast } from "react-toastify"
import { initializeUser } from "../../store/slices/user/userSlice"
import subscriptionData from "./components/subscription-plan/data"
import SubscriptionPlan from "./components/subscription-plan"


function LandingPage() {
    const { isLoggedIn } = useAppSelector((state) => state.user)
    const [activeSub, setActiveSub] = useState(-1)
    const [formFields, setFormFields] = useState({
        userId: '',
        password: ''
    })
    const dispatch = useAppDispatch()

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormFields((prev) => ({ ...prev, [name]: value }))
    }

    const handleLogin = async () => {
        const body = formFields
        try {
            const response: any = await post('user/login', body)
            console.log(response)

            if (response.status === 200) {
                const { _id, name, email, phoneNumber, countryCode, isBlock } = response.data.userData
                const user = { _id, name, email, phoneNumber, countryCode, isBlock }
                localStorage.setItem('backtest_Toke', response.data.token);
                dispatch(initializeUser({ data: { userBasic: user, token: response.data.token }, }))
                toast.success(response.message)
            }

        } catch (error) {
            toast.error('Credential Not Matching')
        }
    }

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
                                        <img src='/assets/img/starImg.png' alt='' className='starImg' />
                                    </h1>
                                    <h3 className='banner_grayTxt'>(Banknifty & Nifty) </h3>
                                </div>
                                <div className='col-lg-5'>
                                    {!isLoggedIn && <div className="card_box">
                                        <h3 className="card_title">Login</h3>
                                        <div className="login_signup">
                                            <Button className="primaryBtn" >Login</Button>
                                            <Button className="signup_btn" ><Link to='/signup'> SignUp</Link></Button>
                                        </div>
                                        <div className="input_text">
                                            <div className="e_mail">
                                                <h5>Email</h5>
                                                <input className='inputClass' type="email" placeholder="Enter your Email here" name="userId" value={formFields.userId} onChange={handleFormChange} />
                                            </div>
                                            <div className="e_mail">
                                                <h5>Password</h5>
                                                <input className='inputClass' type="password" placeholder="Enter your Email here" name="password" value={formFields.password} onChange={handleFormChange} />
                                            </div>
                                            <p className="forgot_text"><Link to='/reset-password'>Forgot Password?</Link> </p>
                                        </div>
                                        <div className="main_btn">
                                            <Button className="btn_wrap" children={"Login"} onClick={handleLogin} />
                                            <p className="btn_wrap_text">Or</p>
                                            <p className="btn_wrap_text">Don’t have an account? <span className="signup_mark"><Link to={'/signup'}> SignUp</Link></span></p>
                                        </div>
                                    </div>}
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
                    <div className="feature_line">
                        <h2 className="feature_txt">Subscription Plans</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {
                            subscriptionData.map((sub, index) => <SubscriptionPlan key={index} index={index} activeIndex={activeSub} duration={sub.duration} features={sub.features} price={sub.price} priceLabel={sub.priceLabel} selectSub={setActiveSub} />)
                        }
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