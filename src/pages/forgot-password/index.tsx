import { Controller, FieldValues, useForm } from 'react-hook-form'
import PhoneInput, { CountryData } from 'react-phone-input-2';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../component/button';
import { useState } from 'react'
import post from '../../HTTP/post';
import { toast } from 'react-toastify';

type Inputs = {
    phoneNumber: string;
    otp: string
    password: string;
    confirmpassword: string;
};

const Forgotpassword = () => {
    const [recievedOTP, setRecievedOTP] = useState<null | boolean>(null)
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const { register, handleSubmit, formState: { errors }, control } = useForm<Inputs>();
    const navigate = useNavigate()
    const onSubmit = async (data: FieldValues) => {
        const { otp, password, confirmpassword } = data
        const code = countryCode;
        const numberWithCode = phoneNumber;
        const numberWithoutCode = (`+${numberWithCode}`).replace(`+${code}`, '')
        if (!recievedOTP) {
            const body = {
                phoneNumber: numberWithoutCode,
                countryCode: `+${countryCode}`,
            }
            try {
                const response: any = await post('user/password/forgot', body)
                if (response.status === 200) {
                    setRecievedOTP(true)
                    toast.success('OTP Sent')
                }
            } catch (error) {
                console.log(error)
                toast.error('Soemthing went wrong')
            }
        } else {
            const body = {
                phoneNumber: numberWithoutCode,
                countryCode: `+${countryCode}`,
                password,
                otp
            }
            if (data.password === data.confirmpassword) {
                const response: any = await post('user/password/reset', body)
                if (response.status === 200) {
                    toast.success(response.message)
                    navigate('/')
                } else {
                    toast.error(response.message)
                }
            } else {
                toast.error('Password Must Match')
            }
        }
    };
    return (
        <>
            <>
                <section className='login_Wrapper'>
                    <div className='w-4/12 px-16 py-8 login'>
                        <div>
                            <h1 className='text-center text-3xl mb-4 font-bold'>Forgot password</h1>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <label htmlFor="signup_Number" className='form_Labels'>Phone No:</label>
                                    <PhoneInput
                                        country={'us'}
                                        value={phoneNumber}
                                        onChange={(value, country) => {
                                            setPhoneNumber(value);
                                            setCountryCode((country as CountryData).dialCode);
                                        }}
                                    />

                                    {!!recievedOTP && <>

                                        <label htmlFor="forgot_OTP" className='form_Labels'>otp</label>
                                        <input type='text' className='inputClass' id='forgot_OTP' placeholder='Enter OTP here'  {...register('otp')} />

                                        <label htmlFor="">Password</label>
                                        <input type='password' className='inputClass' placeholder='Enter Your password Here' {...register('password', {
                                            required: true
                                        })} />


                                        <label htmlFor="">Confirm Password</label>
                                        <input type='text' className='inputClass' placeholder='This need to same as password' {...register('confirmpassword', {
                                            required: true
                                        })} />

                                    </>
                                    }
                                    <div className='text-center my-4'>
                                        <Button type='submit' className='auth_Active'>{!recievedOTP ? 'Get OTP' : 'Reset Password'}</Button>
                                    </div>


                                    {recievedOTP && <p className='text-center mb-2 text_Light'>Resend OTP</p>}

                                    <p className='text-center mb-2 text_Light'>or</p>

                                    <div className='text-center flex justify-center'>
                                        <Link to={'/login'} className='text-blue-500 mr-4'> Login</Link>
                                        <span className='h-6 bg-blue-500 block' style={{ width: '1px' }}></span>
                                        <Link to={'/signup'} className='text-blue-500 ml-4'> Signup</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section >
            </>
        </>
    )
}

export default Forgotpassword