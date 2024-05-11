import { icons } from "lucide-react";

const SideNav = () => {

    const menuList = [
        { id: 1, name: 'Icon', icon: 'PencilRuler' },
        { id: 2, name: 'Background', icon: 'image' },
        { id: 3, name: 'Upgrade', icon: 'shield-plus' },
    ]

    return (
        <div>

            <div>
                {
                    menuList.map((menu) => {
                        return (

                            <div key={menu.id}>
                                <h2 className="p-3 text-lg px-7 text-gray-700 my-2 cursor-pointer hover:bg-primary hover:text-white hover:rounded-md transition-all duration-200 ease-in-out">{menu.name}</h2>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default SideNav;