"use client"
import { useState } from "react";

interface ButtonProps {
    btnText : string ;
    style : string ;
    icone : JSX.Element | null;
    clickEvent: () => void;
}

const MyButton: React.FC<ButtonProps> = ({btnText, style, icone, btnType, clickEvent}:any) => {

    const [isAnimating, setIsAnimating] = useState(false);

    const handeleClick = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
        clickEvent()
    }

    return ( 
        <button 
            onClick={handeleClick}
            className={`cursor-pointer ${style} ${isAnimating ? 'animate-custom' : ''}`} type={btnType}
            >
            {btnText}
            <div className="pr-2">
                {icone}
            </div> 
        </button>
     );
}

export default MyButton;