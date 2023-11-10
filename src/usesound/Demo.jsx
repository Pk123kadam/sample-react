import React, { useRef } from "react";
import useSound from "use-sound";
function Demo() {
    const ref = useRef()
    const [isChecked, setIsChecked] = React.useState(false);
    // const [playActive] = useSound(
    //     '../src/assets/sample.mp3',
    //     { volume: 0.25 }
    // );
    const [playOn] = useSound(
        '../src/assets/sample.mp3',
        { volume: 0.25 }
    );
    const [playOff] = useSound(
        "../src/assets/sample.mp3",
        { volume: 0 }
    )
    return (
        <>
            <input
                type="checkbox"
                name="demo-checkbox"
                checked={isChecked}
                size={24}
                label="I agree to self-isolate"
                ref={ref}
                onChange={() => setIsChecked(!isChecked)}
                onMouseDown={playActive}
                onMouseUp={() => {
                    isChecked ? playOn() : playOff();
                }}
            />
            {
                isChecked ? playOn() : playOff()
            }
        </>

    );
}
export default Demo