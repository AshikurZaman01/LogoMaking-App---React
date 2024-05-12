import { Mouse } from "lucide-react";
import { useState } from "react";


const IconController = () => {

    const [size, setSize] = useState(0);

    const handleSize = (e) => {
        setSize(e.target.value);
        console.log(size);
    }

    return (
        <div>

            <div>
                <label className="text-xl font-bold" htmlFor="mouse">Icon</label>
                <div id="mouse" className="p-3 cursor-pointer bg-gray-200  rounded-md w-[50px] h-[50px] flex items-center my-1 ">
                    <Mouse />
                </div>
            </div>

            <div>
                <label className="text-xl font-bold">Size</label>

                <div id="mouse" className="p-3 cursor-pointer bg-gray-200  rounded-md  h-[50px] flex items-center my-1 ">
                    <input onChange={handleSize} value={size} type="range" min={0} max={10} className="w-[80%]" />
                </div>

            </div>

        </div>
    );
};

export default IconController;