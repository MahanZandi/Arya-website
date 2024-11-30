"use client"
import MyButton from "@/components/home-page-componentd/MyButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AryaLogo from '@/public/images/AryaLogoBlack.jpg';
import { FiShoppingCart } from "react-icons/fi";
import { GrContact } from "react-icons/gr";

const NavBar:React.FC = ({darkGreenBtn, noBorderBtn, lightGreenBtn}:any) => {

    const router = useRouter();

    const navigateToHome:any = () =>{
        router.push('/')
    }



    return ( 
        <nav>
            <div className="h-[100px] flex xl:py-[20px] sm:py-[20px] p-5 sm:p-0 bg-transparent ">
                <div className="grid xl:grid-cols-3 gap-4">
                
                    <div className="xl:block hidden">
                        <MyButton
                            style={darkGreenBtn}
                            btnText="محصولات ما"
                            icone ={<FiShoppingCart />}
                        />
                    </div>
                    <div className="xl:hidden block " >
                        <MyButton
                            style={darkGreenBtn}
                            btnText="ارتباط با ما"
                            icone ={<GrContact />}
                            />
                    </div>
                    <div className="xl:block hidden">
                        <MyButton
                            style={lightGreenBtn}
                            btnText="صفحه خانه"
                            icone=''
                            clickEvent={navigateToHome}
                        />
                    </div>
                    <div className="xl:block hidden">
                        <MyButton
                            style={noBorderBtn}
                            btnText="ارتباط با ما"
                            icone=''
                        />
                    </div>

                </div>
                <div className="flex flex-1 justify-end items-center ">
                    <div className="text-BodyL hidden xl:flex">
                        <p>فرآوردانه </p>
                        <p className=" pr-1">آریا</p>
                    </div>
                    <div className="pr-2">
                        <Image 
                            className="mix-blend-multiply w-10 shadow-black" 
                            src={AryaLogo} 
                            alt="Arya Logo"
                            />
                    </div>
                </div>
            </div>
        </nav>
     );
}

export default NavBar;