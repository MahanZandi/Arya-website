"use client"
import MyButton from "./MyButton";
import Image from "next/image";
import AryaLogo from '../public/images/AryaLogoBlack.jpg';
import { FiShoppingCart } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import { useRouter } from 'next/navigation'

const NavBar:React.FC = ({darkGreenBtn, noBorderBtn, lightGreenBtn}:any) => {

    const router = useRouter();

    const scrollToContactUsDeskTop:any = () => {
        window.scrollTo({ 
            top: 3550 ,
            behavior: 'smooth'
         });
        console.log('scroll to contact us in desktop')
    };

    const scrollToContactUsMobile:any = () => {
        window.scrollTo({
            top: 6300 ,
            behavior: 'smooth'
        });
        console.log('scroll to contact us in mobile')
    };

    const navigateToAbout:any = () =>{
        router.push('/about')
    };

    return ( 
        <nav>
            <div className="h-[100px] flex xl:px-[50px] xl:py-[20px] sm:px-[30px] sm:py-[20px] p-5 bg-SweetCorn ">
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
                            clickEvent={scrollToContactUsMobile}
                            />
                    </div>
                    <div className="xl:block hidden">
                        <MyButton
                            style={lightGreenBtn}
                            btnText="درباره ما"
                            icone=''
                            clickEvent={navigateToAbout}
                        />
                    </div>
                    <div className="xl:block hidden">
                        <MyButton
                            style={noBorderBtn}
                            btnText="ارتباط با ما"
                            icone=''
                            clickEvent={scrollToContactUsDeskTop}
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