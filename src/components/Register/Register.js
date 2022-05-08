import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { getAuth, sendEmailVerification } from 'firebase/auth';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,

    ] = useCreateUserWithEmailAndPassword(auth);
    const verifyEmail = () => {


        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("email veri sent");
            });
    }


    // const emailRef = useRef('');
    // const passRef = useRef('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;


        createUserWithEmailAndPassword(email, password);
        verifyEmail();
    }
    if (user) {
        navigate('/login');
    }

    return (

        <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-12 text-center text-5xl font-extrabold">Sign up your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">Email-Address</label>
                        <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" required />
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                            <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
                        </div>

                    </div>
                    <div className="mt-6">
                        <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign Up</button>
                    </div>
                    <h2 className=" mt-2 text-sm"> Aleady have an account? </h2>
                    <Link className='' to='/login'>Login</Link>

                </form>
                <button type="button" className="mx-28 mt-4 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    Sign in with Google
                </button>
            </div>
        </div>

    );
};

export default Register;

