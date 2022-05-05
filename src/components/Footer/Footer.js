import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <span className=' mt-2 block font-bold text-sm text-gray-500 text-center dark:text-red-700'>© 2022
                <Link to="/" class="hover:underline">Fitness Warehouse™</Link>. All Rights Reserved.

            </span>
        </div>
    );
};

export default Footer;