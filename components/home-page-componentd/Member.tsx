import Image from "next/image";


const Member:React.FC = ({avatar, name, job, discription, instagram, telegram, phoneNumber}:any) => {
    return ( 
        <div className={`flex flex-col rounded-3xl py-[40px] px-[30px]  section lg:h-full bg-white justify-center sm:justify-start shadow items-center `}>
            <div className="flex flex-col items-center">
                <Image className="w-[120px] h-[120px] xl:w-[100px] xl:h-[100px] rounded-full object-cover" src={avatar} alt="person Image"/>
                <h3 className="pt-4 text-BodyL font-semibold">{name}</h3>
                <p className="pt-1.5">{job}</p>
            </div>
            <div className="py-[30px] xl:h-[180px]">
                {discription}  
            </div>
            <div className="flex justify-center gap-x-5 font-semibold text-Observatory">
                <p>تلگرام</p>
                <p>اینستاگرام</p>
                <p>شماره تلفن</p>
            </div>
        </div>
     );
}

export default Member;