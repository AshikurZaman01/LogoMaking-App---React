import { Mouse } from "lucide-react";
import { Slider } from "@/components/ui/slider"


const IconController = () => {
    return (
        <div>

            <div>
                <label className="text-xl font-bold" htmlFor="mouse">Icon</label>
                <div id="mouse" className="p-3 cursor-pointer bg-gray-200  rounded-md w-[50px] h-[50px] flex items-center my-1 ">
                    <Mouse />
                </div>
            </div>

        </div>
    );
};

export default IconController;