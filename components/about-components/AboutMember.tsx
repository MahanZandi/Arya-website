"use client";
import Image from "next/image";

const Member: React.FC = ({ avatar, name, job, discription, instagram, telegram, phoneNumber }: any) => {

    return (
        <div className="p-2">
            <div className={`flex flex-col rounded-3xl py-[40px] px-[30px] bg-white justify-center sm:justify-start shadow items-center h-[450px]`}>
                <div className="flex flex-col items-center">
                    <Image className="w-[120px] h-[120px] xl:w-[100px] xl:h-[100px] rounded-full object-cover" src={avatar} alt="person Image" />
                    <h3 className="pt-4 text-BodyS lg:text-BodyL font-extrabold lg:font-semibold">{name}</h3>
                    <p className="pt-1.5 ">{job}</p>
                </div>
                <div className="py-[30px] h-[180px] text-BodyS xl:text-BodyM overflow-auto scroll-thin " dir="rtl">
                    {discription}
                </div>
                <div className="flex justify-center gap-x-5 pt-4 text-BodyS xl:text-BodyM font-semibold">
                    <p className={telegram ? 'text-Observatory' : 'text-gray-500'}>تلگرام</p>
                    <p className={instagram ? 'text-Observatory' : 'text-gray-500'}>اینستاگرام</p>
                    <p className={phoneNumber ? 'text-Observatory' : 'text-gray-500'}>شماره تلفن</p>
                </div>
            </div>
        </div>
    );
}

export default Member;
