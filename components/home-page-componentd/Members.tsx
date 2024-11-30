import Member from "@/components/home-page-componentd/Member";
import maziar from "@/public/images/maziar.jpg";
import rashid from "@/public/images/rashid.jpg";
import rozbe from "@/public/images/rozbe.jpg";

const Members:React.FC = () => {

    const discription = {
        rashid : "مهندس رشید لطف ورزی در سال 1391 کارخانه فرآوردانه آریا را با پیشرفته ترین و مدرن ترین دستگاه ها و همچنین به کار گیری متخصصین و افراد مجرب با استاندارد های جهانی با هدف خدمت به طیور کشور تاسیس کرده و با لطف پروردگار تا به امروز این شرکت فعالیت میکند",
        maziar: "مهندس زندی در تامیین نگهداری دستگاه ها نصب و راه اندازی دستگاه ها و احداث پروزه های جدید و به روز جهت بهینه سازی کارخانه میباشد" ,
        rozbe: ""

    }

    const team = [
        {id:1, name:"رسول لطف ورزی", job:"مدیر عامل", discription: discription.rashid, instagram: "", telegram: "", phoneNumber: '09127288972', avatar:rashid},
        {id:2, name:"مازیار الوارزندی", job:"مسئول فنی", discription: discription.maziar, instagram: "", telegram: "", phoneNumber: '09271782172', avatar:maziar},
        {id:3, name:"روزبه لطف ورزی", job:"مشاور", discription: discription.rozbe, instagram: "", telegram: "", phoneNumber: '09271782272', avatar:rozbe},
    ]

    return ( 
        <div className="text-MineShaft px-[32px] md:px-[30px] xl:px-[55px]">
            <div className="pt-[120px] pb-[60px] flex flex-col justify-center items-center">
                <h1 className="pb-5 text-DisplayS sm:text-DisplayL font-extrabold">
                    اعضای شرکت آریا
                </h1>
                <p>
                    چهره های پشت صحنه را بشناسید و با ارزش هایی که ما را هدایت می کنند آشنا شوید.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-[30px]">
                {team.map(members => (
                    <Member
                        key={members.id}
                        name={members.name}
                        job={members.job}
                        discription={members.discription}
                        instagram={members.instagram}
                        telegram={members.telegram}
                        phoneNumber={members.phoneNumber}
                        avatar={members.avatar}
                        />
                ))}
            </div>
        </div>
     );
}

export default Members;