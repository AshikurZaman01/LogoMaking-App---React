import { Mouse } from "lucide-react";
import { useState } from "react";
import ColorPickerController from "../ColorPickerController/ColorPickerController";


const IconController = () => {

    const [size, setSize] = useState(120);
    const [rotate, setRotate] = useState(30);

    const handleSize = (e) => {
        setSize(e.target.value);
    }

    const handleRotate = (e) => {
        setRotate(e.target.value);
    }

    return (
        <div>

            <div>
                <label className="text-xl font-bold" htmlFor="mouse">Icon</label>
                <div id="mouse" className="p-3 cursor-pointer bg-gray-200  rounded-md w-[50px] h-[50px] flex items-center my-1 ">
                    <Mouse />
                </div>
            </div>

            <div className="my-4">
                <label className="text-xl font-bold">Size <span className="flex justify-end items-center text-xs font-extrabold">{size} px</span></label>

                <div id="mouse" className="p-3 cursor-pointer bg-gray-200  rounded-md  h-[50px] flex items-center my-1 ">
                    <input onChange={handleSize} value={size} type="range" min={0} max={512} className="w-[80%]" />
                </div>
            </div>

            <div className="my-4">
                <label className="text-xl font-bold">Rotate <span className="flex justify-end items-center text-xs font-extrabold">{rotate} *</span></label>

                <div id="mouse" className="p-3 cursor-pointer bg-gray-200  rounded-md  h-[50px] flex items-center my-1 ">
                    <input onChange={handleRotate} value={rotate} type="range" min={0} max={360} className="w-[80%]" />
                </div>
            </div>

            <div className="my-4">
                <label className="text-xl font-bold">Colop Picker</label>

                <div className="">
                    <ColorPickerController />
                </div>
            </div>

        </div>
    );
};

export default IconController;