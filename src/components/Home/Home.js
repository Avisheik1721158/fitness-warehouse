import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Loading from '../Loading/Loading';


const Home = () => {
    // const [loading] = useAuthState(auth);
    // if (loading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <Banner></Banner>
            <Items></Items>


        </div>
    );
};

export default Home;