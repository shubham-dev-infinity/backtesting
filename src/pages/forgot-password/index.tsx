import { Controller, FieldValues, useForm } from 'react-hook-form'
import PhoneInput, { CountryData } from 'react-phone-input-2';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../component/button';
import { useState } from 'react'
import post from '../../HTTP/post';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../custome-hooks/redux';
import { changeModal } from '../../store/slices/modal/modalSlice';

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
    const dispatch = useAppDispatch();
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
                    dispatch(changeModal({ data: 'login' }))
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <span className='text-blue-500 mr-4 cursor-pointer' onClick={() => dispatch(changeModal({ data: 'login' }))}>  Login</span>
                    <span className='h-6 bg-blue-500 block' style={{ width: '1px' }}></span>
                    <span className='text-blue-500 ml-4 cursor-pointer' onClick={() => dispatch(changeModal({ data: 'signup' }))}> Signup</span>
                </div>
            </form>
        </>
    )
}

export default Forgotpassword