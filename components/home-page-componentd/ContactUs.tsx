import Form from "./Form";
import { GrMap } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { BsPostcard } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";


const ContactUs:React.FC = ({darkGreenBtn}:any) => {
    return ( 
        <section id="contact-us" className=" py-[120px] px-[32px] md:px-[30px] xl:px-[55px] text-BodyS sm:text-BodyM ">
            <div className="shadow bg-white rounded-3xl p-[30px] md:p-[40px] xl:p-[60px] justify-center sm:justify-start flex flex-col">
                <div className="flex w-full flex-col items-start">
                    <p className="pb-5 text-DisplayS sm:text-DisplayL font-extrabold">ارتباط با ما </p> 
                    <section className="pt-2">
                        <a className="flex hover:underline decoration-Observatory hover:text-Observatory" href="https://www.google.com/maps/@36.928863,54.159203,352m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
                            <div>
                                <GrMap className="text-Observatory" size={24}/>
                            </div>
                            <p className="pr-3 flex">
                                استان گلستان - شهرستان بندرترکمن - کیلومتر 7 جاده آق قلا - شهرک صنعتی 5 پیکر - مختومقلی 6 ملانفس 3
                            </p>
                        </a>
                    </section>
                </div>
                <div className=" grid lg:grid-cols-2">
                    <div>

                        <section className="flex pt-5">
                            <a className="flex hover:underline decoration-Observatory hover:text-Observatory" href="tel:+9801734408646;ext=56"> 
                                <LuPhoneCall className="text-Observatory -rotate-90" size={24}/>
                                <p className="pr-3 flex">
                                    تلفن: 
                                    <p className="pr-1">01734408646-56</p>
                                </p>
                            </a>
                        </section>
                        <section className="flex pt-5"> 
                            <LiaFaxSolid className="text-Observatory" size={24}/>
                            <p className="flex pr-3">
                                فکس:
                                <p className="pr-1">01734408650</p>
                            </p>
                        </section>
                        <section className="flex pt-5"> 
                            <BsPostcard className="text-Observatory" size={24}/>
                            <p className="flex pr-3">
                                کد پستی:
                                <p className="pr-1">01734408650</p>
                            </p>
                        </section>
                        <div className="pt-[40px]">
                            <p className="text-BodyL sm:text-DisplayS font-semibold">
                                فضای مجازی
                            </p>
                            <section className="flex gap-4 pt-[20px]">
                                <a className="w-8 h-8 p-1 grid place-items-center bg-AquaSqueeze rounded-full hover:text-Observatory ">
                                    <IoLogoInstagram size={26} className="cursor-pointer"/>
                                </a>

                                <a className="w-8 h-8 p-1 grid place-items-center bg-AquaSqueeze rounded-full hover:text-Observatory ">
                                    <LiaTelegramPlane size={24} className="cursor-pointer"/>
                                </a>

                                <a className="w-8 h-8 p-1 grid place-items-center bg-AquaSqueeze rounded-full hover:text-Observatory ">
                                    <BsTwitterX size={20} className="cursor-pointer"/>
                                </a>

                                <a className="w-8 h-8 p-1 grid place-items-center bg-AquaSqueeze rounded-full hover:text-Observatory ">
                                    <MdWhatsapp size={24} className="cursor-pointer"/>
                                </a>
                            </section>
                        </div>
                    </div>
                    <div className=" ">
                        <Form 
                            darkGreenBtn={darkGreenBtn}
                        />
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ContactUs;