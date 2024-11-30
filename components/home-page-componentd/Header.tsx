"use client"
import Image from "next/image";
import MyButton from "@/components/home-page-componentd/MyButton";
import NavBar from "@/components/home-page-componentd/NavBar";
import AryaImg from "@/public/images/AryaImg.png";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineEast } from "react-icons/md";
import { useRouter } from "next/navigation";


const Header: React.FC = ({darkGreenBtn ,zirconBtn ,noBorderBtn ,lightGreenBtn }:any) => {

    const titleDiscription = 'شرکت فرآوردانه آریا با مدیریت رسول لطف ورزی با هدف تولید خوراک دام و طیور با کیفیت در سطح جهانی از سال 1391 تا به امروز فعالیت میکند'

    const router = useRouter();

    const navigateToAbout:any = () =>{
        router.push('/about')
    }

  return (
    <div className="">
        <NavBar
            darkGreenBtn={darkGreenBtn}
            noBorderBtn={noBorderBtn}
            lightGreenBtn={lightGreenBtn}
        />
        <div className="flex bg-SweetCorn ">
            <div className="flex flex-col xl:flex-row w-full sm:px-10 sm:pt-16 px-4 pt-7">
                <div className="flex items-center w-full">
                    <div className="flex text-MineShaft pb-16 sm:p-10 sm:pb-32 flex-col justify-center items-center">
                            <h1 className="text-DisplayM sm:text-DisplayXL xl:text-Display2XL flex xl:justify-start justify-center w-full font-[1000]">کارخانه فرآورده آریا</h1>
                            <p className="pb-10 pt-5 md:w-2/3 xl:w-full text-BodyM sm:text-xl flex xl:justify-start justify-center sm:leading-8">{titleDiscription}</p>
                        <div className="flex w-full justify-center items-center xl:justify-start xl:items-start gap-4 flex-col sm:flex-row ">
                            <div>
                                <MyButton 
                                    style={darkGreenBtn} 
                                    btnText="محصولات ما"
                                    icone ={<FiShoppingCart />}
                                    />
                            </div>
                            <div>
                                <MyButton 
                                    style={zirconBtn} 
                                    btnText="درباره ما"
                                    icone={<MdOutlineEast />}
                                    clickEvent={navigateToAbout}
                                    />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full  ">
                    <div className="flex items-center justify-center w-full xl:justify-end xl:items-end xl:pl-20">
                    <Image 
                        className="w-[315px] sm:w-[450px] " 
                        src={AryaImg} 
                        alt="AryaImage" 
                        />
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Header;
