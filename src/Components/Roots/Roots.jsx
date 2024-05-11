import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import SideNav from '../Pages/SideNav/SideNav';

const Roots = () => {
    return (
        <div>
            <Header></Header>

            <div className='flex mx-auto '>

                <div className='w-64'>
                    <SideNav></SideNav>
                </div>

                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Roots;