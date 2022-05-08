
// import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
// import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Header = () => {
    // const [open, setOpen] = useState(false);
    // const [user] = useAuthState();
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-600">
                <div>

                </div>
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        {/* <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Fitness Warehouse</span>
                    </Link>

                    {/* <div className=" hidden w-full md:flex md:w-auto" id="mobile-menu"> */}
                    <div>


                        {/* <div onClick={() => setOpen(!open)} >{open ? <XIcon className='w-6 h-6 fill-orange-900 lg:hidden mx-auto'></XIcon> : <MenuIcon className='w-6 h-6 fill-orange-900 lg:hidden mx-auto'></MenuIcon>}</div> */}
                        <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white" >Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-700  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >About</Link>
                            </li>
                            <li>
                                <Link to="/inventory" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Inventory</Link>
                            </li>

                            <li>
                                <Link to="/FAQ " className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >FAQ</Link>
                            </li>
                            <li>
                                <Link to="/blogs " className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Blogs</Link>

                            </li>
                            <li>
                                <Link to="/register " className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Register</Link>
                            </li>
                            <li>



                                {
                                    user ? <button onClick={handleSignOut} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Sign Out </button> :
                                        <Link to="/login " className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Login</Link>
                                }




                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;