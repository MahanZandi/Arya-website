"use client"
import { LuLink2 } from "react-icons/lu";
import MyButton from "./MyButton";
import { FaArrowTurnUp } from "react-icons/fa6";

const Footer = ({footerBtn}:any) =>{

    const scrollToTop:any = () => {
        window.scrollTo({
            top: 0 ,
            behavior: 'smooth'
        });
        console.log('scroll to top')
    };

    return(
        <div>
            <div className=" flex justify-center ">
                <MyButton
                    style={footerBtn}
                    btnText="اسکرول به بالا"
                    icone={<FaArrowTurnUp className="scale-x-[-1]"/>}
                    clickEvent={scrollToTop}
                />
            </div>
            <div className="bg-MineShaft text-white px-[32px] md:px-[30px] xl:px-[55px]">
                <div className="py-[20px] flex flex-col text-BodyS ">
                    <p className="text-BodyS sm:text-BodyL font-medium pb-2 pr-3">
                        لینک های مرتبط
                    </p>
                    <a className="flex gap-2 w-[380px] sm:w-[420px] hover:bg-gray-600 p-2 items-center transition-all duration-200">
                        <div className="w-8 h-8 bg-[#4E4D4D] grid place-items-center rounded-full">
                            <LuLink2 size={20}/>
                        </div>
                        <p>
                            سازمان جهاد کشاورزی استان گلستان
                        </p>
                    </a>
                    <a className="flex gap-2 w-[380px] sm:w-[420px] hover:bg-gray-600 p-2 items-center transition-all duration-300">
                        <div className="w-8 h-8 bg-[#4E4D4D] grid place-items-center rounded-full">
                            <LuLink2 size={20}/>
                        </div>
                        <p>
                            وزارت جهاد کشاورزی
                        </p>
                    </a>
                    <a className="flex gap-2 w-[380px] sm:w-[420px] hover:bg-gray-600 p-2 items-center transition-all duration-300">
                        <div className="w-8 h-8 bg-[#4E4D4D] grid place-items-center rounded-full">
                            <LuLink2 size={20}/>
                        </div>
                        <p>
                            سازمان دامپزشکی کشور
                        </p>
                    </a>
                    <a className="flex gap-2 w-[380px] sm:w-[420px] hover:bg-gray-600 p-2 items-center transition-all duration-300">
                        <div className="w-8 h-8 bg-[#4E4D4D] grid place-items-center rounded-full">
                            <LuLink2 size={20}/>
                        </div>
                        <p>
                            اداره کل دامپزشکی استان گلستان
                        </p>
                    </a>
                    <a className="flex gap-2 w-[380px] sm:w-[420px] hover:bg-gray-600 p-2 items-center transition-all duration-300">
                        <div className="w-8 h-8 bg-[#4E4D4D] grid place-items-center rounded-full">
                            <LuLink2 size={20}/>
                        </div>
                        <p>
                            سازمان نظام دامپزشکی جمهوری اسلامی ایران
                        </p>
                    </a>
                    <a className="flex gap-2 w-[380px] sm:w-[420px] hover:bg-gray-600 p-2 items-center transition-all duration-300">
                        <div className="w-8 h-8 bg-[#4E4D4D] grid place-items-center rounded-full">
                            <LuLink2 size={20}/>
                        </div>
                        <p>
                            سازمان نظام مهندسی کشور و منابع طبیعی جمهوری اسلامی ایران
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer