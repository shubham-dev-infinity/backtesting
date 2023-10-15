import { Button } from '../../component/button'
import { Controller, FieldValues, useForm } from "react-hook-form";
import './styles.scss'
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import post from '../../HTTP/post';
import { useState } from 'react'

type Inputs = {
    name: string;
    email: string;
    password: string;
    phone: string;
    confirmpassword: string;
    otp: string
};

const LogIn = () => {
    const [recievedOTP, setRecievedOTP] = useState<null | string>(null)
    const { register, handleSubmit, formState: { errors }, control } = useForm<Inputs>();
    const onSubmit = async (data: FieldValues) => {

        const response: any = await post('/login', data)
        const jsonResponse = response.json();
        console.log(jsonResponse);

    };

    const handleVarifyOTP = () => {

    }
    return (
        <>
            <section className='login_Wrapper'>
                <div className='w-50 login'>
                    <div>
                        <h1>Log In</h1>
                        <div>
                            <Button className='bg-transparent text-blue-600 rounded-lg 123'>Login</Button>
                            <Button>Signup</Button>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="">Name</label>
                                <input type='text'  {...register('name', {
                                    required: true
                                })} />
                                <label htmlFor="">Phone No:</label>
                                <Controller
                                    control={control}
                                    name="phone"
                                    defaultValue=""
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
                                </>
                                }

                                {!recievedOTP && <Button type='submit' className='bg-black'>Get OTP</Button>}
                                {!!recievedOTP && <Button type='submit'>Varify OTP</Button>}
                                {!!recievedOTP && <p>Resend OTP</p>}
                                <p>or</p>
                                <p>Don't Have Account?<Link to={''}>Sign Up</Link></p>
                                <input type='submit' />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default LogIn