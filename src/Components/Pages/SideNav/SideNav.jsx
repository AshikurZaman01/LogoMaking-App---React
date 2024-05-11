import { PencilRuler, Image, ShieldPlus } from "lucide-react";
import React from "react";

const SideNav = () => {
    const menuList = [
        { id: 1, name: 'Icon', icon: <PencilRuler /> },
        { id: 2, name: 'Background', icon: <Image /> },
        { id: 3, name: 'Upgrade', icon: <ShieldPlus /> },
    ];

    return (
        <div className="border h-[100vh]">
            <div>
                {menuList.map((menu) => (
                    <div key={menu.id} className="flex items-center gap-2 w-full hover:bg-primary hover:text-white hover:rounded-md transition-all duration-200 ease-in-out">

                        <div className="ml-5">
                            {menu.icon}
                        </div>

                        <h2 className="p-3 text-lg px-7 text-gray-700 my-2 cursor-pointer hover:text-white">{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideNav;
