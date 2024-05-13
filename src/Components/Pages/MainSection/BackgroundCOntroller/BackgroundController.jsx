import React, { useEffect, useState } from 'react';
import ColorPickerController from '../ColorPickerController/ColorPickerController';

const BackgroundController = () => {

    const [rounded, setRounded] = useState(0);
    const [padding, setPadding] = useState(0);
    const [color, setColor] = useState('#fff');

    const handleRounded = (e) => {
        setRounded(e.target.value);
    }

    const hanldlePadding = (e) => {
        setPadding(e.target.value);
    }

    const backgroundStorage = JSON.parse(localStorage.getItem('background'));

    useEffect(() => {
        const updateValue = {

            ...backgroundStorage,
            backgroundRounded: rounded,
            backgroundPadding: padding,
            backgroundColor: color
        }

        localStorage.setItem('background', JSON.stringify(updateValue));

    }, [rounded, padding, color, backgroundStorage])

    return (
        <div>

            <div className="my-4">
                <label className="text-xl font-bold">Rounded <span className="flex justify-end items-center text-xs font-extrabold">{rounded} px</span></label>

                <div id="mouse" className="p-3 cursor-pointer bg-gray-200  rounded-md  h-[50px] flex items-center my-1 ">
                    <input onChange={handleRounded} value={rounded} type="range" min={0} max={512} className="w-[80%]" />
                </div>
            </div>

            <div className="my-4">
                <label className="text-xl font-bold">Padding <span className="flex justify-end items-center text-xs font-extrabold">{padding} px</span></label>

                <div id="mouse" className="p-3 cursor-pointer bg-gray-200  rounded-md  h-[50px] flex items-center my-1 ">
                    <input onChange={hanldlePadding} value={padding} type="range" min={0} max={100} className="w-[80%]" />
                </div>
            </div>

            <div className="my-4">
                <label className="text-xl font-bold">Colop Picker</label>

                <div className="">
                    <ColorPickerController hideCOntroller={false} selectedColor={(color) => setColor(color)} />
                </div>
            </div>

        </div>
    );
};

export default BackgroundController;