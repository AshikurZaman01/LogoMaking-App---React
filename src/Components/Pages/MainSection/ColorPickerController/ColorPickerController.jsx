import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = ({ hideCOntroller = false, selectedColor }) => {

    const [color, setColor] = useState('rgba(255,255,255,1)');

    return (
        <div className="my-5">
            <ColorPicker value={color} hideControls={hideCOntroller} hideEyeDrop hideAdvancedSliders hideColorGuide hideInputType onChange={(e) => { setColor(e); selectedColor(e) }} />
        </div>
    );
};

export default ColorPickerController;