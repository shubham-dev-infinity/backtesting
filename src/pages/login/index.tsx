import { Button } from '../../component/button'
import { Controller, FieldValues, useForm } from "react-hook-form";
import './styles.scss'
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import post from '../../HTTP/post';
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../custome-hooks/redux';
import { initializeUser } from '../../store/slices/user/userSlice';
import { toast } from 'react-toastify';

type Inputs = {
    name: string;
    email: string;
    password: string;
    phone: string;
    confirmpassword: string;
    otp: string
};

const LogIn = () => {
    const { isLoggedIn } = useAppSelector((state) => state.user)
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
            <section className='login_Wrapper'>
                <div className='w-1/3 login'>
                    <div className=''>
                        <h3 className="card_title">Login</h3>
                        <div className='w-full text-center mb-4 flex'>
                            <Button className='auth_Default_Btn flex-1'><Link to='/signup'>Signup</Link> </Button>
                            <Button className='auth_Active flex-1'>Login</Button>
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
                    </div>
                </div>
            </section>
        </>)
}

export default LogIn