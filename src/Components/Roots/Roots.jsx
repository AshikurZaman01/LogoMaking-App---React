import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import SideNav from '../Pages/SideNav/SideNav';
import { useState } from 'react';
import Home from '../Pages/Home/Home';

const Roots = () => {

    const [selectedIndexValue, setSelectedIndexValue] = useState(0)


    return (
        <div>
            <Header></Header>

            <div className='flex mx-auto '>

                <div className='w-64'>
                    <SideNav selectedIndex={(value) => setSelectedIndexValue(value)}></SideNav>
                </div>

                <div className='flex-1'>
                    <Home selectedIndexValue={selectedIndexValue}></Home>
                </div>

            </div>
        </div>
    );
};

export default Roots;