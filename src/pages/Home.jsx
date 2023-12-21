import React from 'react';
import Banner from '../components/home/Banner';
import HomeCompOne from "../components/home/HomeCompOne"

const Home = () => {
    return (
        <div className='container mx-auto mb-10'>
            <Banner />
            <HomeCompOne />
        </div>
    );
};

export default Home;
