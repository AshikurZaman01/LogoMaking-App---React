import { PencilRuler, Image, ShieldPlus } from "lucide-react";
import React, { useState } from "react";

const SideNav = () => {

    const menuList = [
        { id: 1, name: 'Icon', icon: <PencilRuler /> },
        { id: 2, name: 'Background', icon: <Image /> },
        { id: 3, name: 'Upgrade', icon: <ShieldPlus /> },
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="border h-[100vh]">
            <div>
                {menuList.map((menu, index) => (

                    <div onClick={() => setActiveIndex(index)} key={menu.id} className={`group flex items-center gap-2 w-full hover:bg-primary hover:text-white hover:rounded-md transition-all duration-200 ease-in-out hover:cursor-pointer ${activeIndex === index && 'bg-primary text-white'}`}>


                        <div className="ml-5">
                            {menu.icon}
                        </div>

                        <h2 className="p-3 text-lg px-7 text-gray-700 my-2  group-hover:text-white">{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideNav;
