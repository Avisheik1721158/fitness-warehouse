import { getAuth, sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
        email,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {

        errorElement = <div>
            <p className='text-red-700'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate(from, { replace: true });
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);



    }

    const handlePassword = () => {
        sendEmailVerification(auth, email)
            .then(() => {
                console.log('email veri sent')
            })
    }
    return (
        <div>

            <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="email">Email-Address</label>
                            <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="password">Password</label>
                            <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                                <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
                            </div>
                            <button onClick={handlePassword} className="text-sm"> Forgot your password? </button>
                        </div>
                        <div className="mt-6">
                            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 disabled:opacity-25 transition">Sign In</button>
                        </div>
                        <div className="mt-6 text-center">
                            <Link to='/register' className="underline">Sign up for an account</Link>
                        </div>
                    </form>
                    {errorElement}
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div >
    );
};

export default Login;