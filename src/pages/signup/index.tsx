import { Button } from '../../component/button'
import { Controller, FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import post from '../../HTTP/post';
import './styles.scss'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../custome-hooks/redux';
import { TUserBasic, initializeUser } from '../../store/slices/user/userSlice';
import { TSignUpresponse } from '../../types/response';

type Inputs = {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    confirmpassword: string;
    otp: string
};

const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [recievedOTP, setRecievedOTP] = useState<null | boolean>(null)
    const { register, handleSubmit, formState: { errors }, control } = useForm<Inputs>();
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onSubmit = async (data: FieldValues) => {
        const { name, email, password, otp } = data
        const code = countryCode;
        const numberWithCode = phoneNumber;
        const numberWithoutCode = (`+${numberWithCode}`).replace(`+${code}`, '')
        if (!recievedOTP) {
            const body = {
                name,
                email,
                phoneNumber: numberWithoutCode,
                countryCode: `+${countryCode}`,
                password
            }
            try {
                const response: any = await post('user/signup', body)
                if (response.status === 200) {
                    setRecievedOTP(true)
                }
            } catch (error) {
                console.log(error)
                toast.error('Soemthing went wrong')
            }

        } else {
            const body = {
                phoneNumber: numberWithoutCode,
                countryCode: `+${countryCode}`,
                otp
            }
            try {
                const response: TSignUpresponse = await post('user/otp/verify', body)
                console.log(response, 'response')
                if (response.status === 200) {
                    const { _id, name, email, phoneNumber, countryCode, isBlock } = response.data.userData
                    const user = { _id, name, email, phoneNumber, countryCode, isBlock }
                    localStorage.setItem('backtest_Toke', response.data.token);
                    dispatch(initializeUser({ data: { userBasic: user, token: response.data.token }, }))
                    toast.success('Succesfuly Register')
                    navigate('/')
                }
            } catch (error) {
                console.log(error)
            }
        }
    };
    return (
        <>
            <section className='login_Wrapper'>
                <div className='w-1/2 lg:w-1/3  lg:px-16 lg:py-8 login'>
                    <div>
                        <h1 className='text-center text-3xl mb-4 font-bold'>Sign Up</h1>
                        <div className='w-full text-center mb-4 flex'>
                            <Button className='auth_Default_Btn flex-1'><Link to={'/login'}>Login</Link> </Button>
                            <Button className='auth_Active flex-1'>SignUp</Button>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <label htmlFor="signup_Name" className='form_Labels'>Name</label>
                                <input type='text' className='inputClass' id='signup_Name' placeholder='Enter Your Name here' {...register('name', {
                                    required: true
                                })} />

                                {!recievedOTP && <>
                                    <label htmlFor="signup_Email" className='form_Labels'>Email</label>
                                    <input type='email' className='inputClass' id='signup_Email' placeholder='Enter Your email here' {...register('email', {
                                        required: true
                                    })} />
                                </>
                                }


                                <label htmlFor="signup_Number" className='form_Labels'>Phone No:</label>
                                <div className='phone_Input_Wrapper'>
                                    <PhoneInput
                                        country={'us'}
                                        value={phoneNumber}
                                        onChange={(value, country) => {
                                            setPhoneNumber(value);
                                            setCountryCode((country as CountryData).dialCode);
                                        }}
                                    />
                                </div>


                                {!recievedOTP && <>
                                    <label htmlFor="signup_Password" className='form_Labels'>Password</label>
                                    <input type='password' className='inputClass' id='signup_Password' placeholder='Enter Your password Here' {...register('password', {
                                        required: true
                                    })} />
                                    <label htmlFor="signup_CPassword" className='form_Labels'>Confirm</label>
                                    <input type='text' className='inputClass' id='signup_CPassword' placeholder='This need to same as password'  {...register('confirmpassword', {
                                        required: true
                                    })} />
                                </>
                                }


                                {!!recievedOTP && <>
                                    <label htmlFor="signup_OTP" className='form_Labels'>otp</label>
                                    <input type='text' className='inputClass' id='signup_OTP' placeholder='This need to same as password'  {...register('otp')} />
                                </>
                                }


                                <div className='text-center my-4'>
                                    <Button className='auth_Active' type='submit'>{recievedOTP ? 'Varify OTP' : 'Get OTP'}</Button>
                                </div>
                                <p className='text-center mb-2 text_Light'>or</p>
                                <p className='text-center text_Light'>Already Have Account?<Link to='/login' className='text-blue-500'> Sign In</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default SignUp