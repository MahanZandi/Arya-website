import Image from "next/image";
import aryaCircleImg from '../public/images/chiken.jpg';
import { AiOutlineComment } from "react-icons/ai";
import { BsBuildingGear } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { GiGears } from "react-icons/gi";

const Main:React.FC = () => {
    return ( 
        <div className="my-[60px] md:my-[100px] xl:my-[120px] px-[32px] md:px-[30px] xl:px-[55px] grid xl:grid-cols-2 ">
            <div className="">
                <h2 className="xl:text-DisplayXL md:text-DisplayM text-DisplayS font-extrabold text-MineShaft grid xl:place-content-start place-content-center">
                    چرا فرآوردانه آریا!؟
                </h2>
                 <div className="text-MineShaft grid sm:grid-cols-2 gap-5 pt-8 ">
                    
                    <div className="shadow flex gap-4 items-center p-6 rounded-3xl ">
                        <div className="bg-AquaSqueeze rounded-xl p-2 ">
                            <BsBuildingGear className="text-xl text-Observatory"/>
                        </div>
                        <h3 className="text-lg sm:text-md lg:text-xl">کنترل کیفیت بسیار مجهز</h3>
                    </div>
                    

                    <div className=" shadow flex gap-4 items-center p-6  rounded-3xl ">
                        <div className="bg-AquaSqueeze rounded-xl p-2 ">
                            <GiGears className="text-xl text-Observatory"/>
                        </div>
                        <h3 className="text-lg sm:text-md lg:text-xl flex ">خط تولید پیشرفته</h3>
                    </div>
                    

                    <div className="shadow flex gap-4 items-center p-6  rounded-3xl ">
                        <div className="bg-AquaSqueeze rounded-xl p-2 ">
                            <AiOutlineLike className="text-xl text-Observatory"/>
                        </div>
                        <h3 className="text-lg sm:text-md lg:text-xl">کیفیت بالای محصولات</h3>
                    </div>
                    

                    <div className=" shadow flex gap-4 items-cstart p-6  rounded-3xl ">
                        <div className="bg-AquaSqueeze rounded-xl p-2 ">
                            <AiOutlineComment className="text-xl text-Observatory"/>
                        </div>
                        <h3 className="text-lg sm:text-md lg:text-xl">واحد بازاریابی حرفه‌ای</h3>
                    </div>
                 
             </div>
            </div>
            <div className="mt-10 sm:mt-0 grid xl:place-items-start place-items-center  md:w-[540px] xl:pr-16">
                <Image className="mix-blend-multiply object-cover w-[320px] xl:w-full" src={aryaCircleImg} alt="image"/>
            </div>
        </div>
     );
}

export default Main;