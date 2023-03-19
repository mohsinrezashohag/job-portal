import React from 'react';

import AllJobs from '../components/AllJobs';
import Sidebar from '../components/Sidebar';

const Home = () => {



    return (

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">

            <Sidebar></Sidebar>

            <AllJobs></AllJobs>

        </div>

    );
};

export default Home;