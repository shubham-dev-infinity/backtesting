import { Controller, FieldValues, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import { Button } from '../../component/button';
import { useState } from 'react'

type Inputs = {
    phone: string;
    otp: string
    password: string;
    confirmpassword: string;
};

const Forgotpassword = () => {
    const [recievedOTP, setRecievedOTP] = useState<null | string>(null)
    const { register, handleSubmit, formState: { errors }, control } = useForm<Inputs>();
    const onSubmit = async (data: FieldValues) => {
        if (!recievedOTP) {
            setRecievedOTP('123')
        } else {
            if (recievedOTP === data.otp) {
                if (data.otp === recievedOTP) {
                    if (data.password === data.confirmpassword) {
                        //logic for confirm password
                    } else {
                        alert('Password Must Need To Match')
                    }
                } else {
                    alert('Enter Right OTP')
                }
            }
        }
    };
    return (
        <>
            <>
                <section className='login_Wrapper'>
                    <div className='w-50 login'>
                        <div>
                            <h1>Forgot password
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor="">Phone No:</label>
                                        <Controller
                                            control={control}
                                            name="phone"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <PhoneInput
                                                    {...field}
                                                    country={'us'}
                                                />
                                            )}
                                        />
                                        {!!recievedOTP && <>
                                            <label htmlFor="">Enter OTP</label>
                                            <input type='text'  {...register('otp', {
                                                required: true
                                            })} />

                                            <label htmlFor="">Password</label>
                                            <input type='password'  {...register('password', {
                                                required: true
                                            })} />
                                            <label htmlFor="">Confirm Password</label>
                                            <input type='text'  {...register('confirmpassword', {
                                                required: true
                                            })} />
                                        </>
                                        }
                                        {!recievedOTP && <Button type='submit'>Get  OTP</Button>}
                                        {!!recievedOTP && <Button type='submit'>Reset Password</Button>}
                                        <p>Resend OTP</p>
                                        <p>Or</p>
                                        <div>
                                            <Link to={'/login'}> Login</Link>
                                            <Link to={'/signup'}> Signup</Link>
                                        </div>
                                    </form>
                                </div>
                            </h1>
                        </div>
                    </div>
                </section >
            </>
        </>
    )
}

export default Forgotpassword