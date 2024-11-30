"use client"
import AboutMember from "../about-components/AboutMember";
import maziar from "/public/images/maziar.jpg";
import rashid from "/public/images/rashid.jpg";
import rozbe from "/public/images/rozbe.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Members:React.FC = () => {
    

    const discription = {
        rashid : "مهندس رشید لطف ورزی در سال 1391 کارخانه فرآوردانه آریا را با پیشرفته ترین و مدرن ترین دستگاه ها و همچنین به کار گیری متخصصین و افراد مجرب با استاندارد های جهانی با هدف خدمت به طیور کشور تاسیس کرده و با لطف پروردگار تا به امروز این شرکت فعالیت میکند",
        maziar: "مهندس زندی در تامیین نگهداری دستگاه ها نصب و راه اندازی دستگاه ها و احداث پروزه های جدید و به روز جهت بهینه سازی کارخانه میباشد" ,
        rozbe: "" ,
        kaboli: "",
        dorani: "",
        gharib: "",
        manichehri: ""
    }

    const team:Array<any> = [
        {id:1, name:"رسول لطف ورزی", job:"مدیر عامل", discription: discription.rashid, instagram: "", telegram: "", phoneNumber: '09127288972', avatar:rashid },
        {id:2, name:"مازیار الوارزندی", job:"مشاور تنظیم فنی", discription: discription.maziar, instagram: "", telegram: "", phoneNumber: '09271782172', avatar:maziar},
        {id:3, name:"روزبه لطف ورزی", job:"جانشین مدیر عامل / کنترل کیفی", discription: discription.rozbe, instagram: "", telegram: "", phoneNumber: '09271782272', avatar:rozbe},
        {id:4, name:"علی کابلی", job:"مدیر کارخانه", discription:discription.kaboli, Instagram:"", telegram:"", phoneNumber:'', avatar:""},
        {id:5, name:"بهداد دورانی", job:"...مشاور فنی بهداشتی", discription:discription.dorani, Instagram:"", telegram:"", phoneNumber:'', avatar:""},
        {id:6, name:"خانم غریب", job:"بازرگانی / مالی", discription:discription.gharib, Instagram:"", telegram:"", phoneNumber:'', avatar:""},
        {id:7, name:"خانم منوچهری", job:"دفتر گرگان", discription:discription.manichehri, Instagram:"", telegram:"", phoneNumber:'', avatar:""},
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1 ,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true ,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return ( 
        <div className="section flex justify-center items-center">
            <div className="">
                <h2 className="text-BodyL sm:text-DisplayM font-semibold flex justify-center pb-2">
                    اعضای شرکت آریا
                </h2>
                <div className="slider-container w-[300px] md:w-[600px] lg:w-[900px] xl:w-[1100px]">
                    <Slider {...settings}>
                        
                        {team.map(members => (
                                <AboutMember
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
                    </Slider>
                </div>
            </div>
        </div>
    ); 
}

export default Members;
