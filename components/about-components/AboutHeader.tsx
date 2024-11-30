import MyButton from "../MyButton";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineEast } from "react-icons/md";
import { useRouter } from "next/navigation";

const AboutHeader:React.FC = ({zirconBtn, darkGreenBtn}:any) => {

    const router = useRouter();

    const navigateToHome:any = () =>{
        router.push('/')
    }

    return ( 
        <div className="grid xl:grid-cols-2 pt-10 xl:pt-24">
            <div className='flex text-MineShaft  flex-col justify-center items-center'>
                <div className="flex text-MineShaft pb-16 sm:p-10 sm:pb-32 flex-col justify-center items-center gap-10">
                    <h1 className="text-DisplayM sm:text-DisplayXL xl:text-Display2XL flex xl:justify-start justify-center w-full font-[1000]"> درباره شرکت آریا</h1>
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
                                btnText="صفحه خانه"
                                icone={<MdOutlineEast />}
                                clickEvent={navigateToHome}
                                />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-Zircon grid p-10 gap-4 lg:gap-2 rounded-3xl h-[300px] sm:h-[200px] lg:h-auto xl:h-[350px]">
                <h2 className="text-BodyL xl:text-DisplayS font-semibold ">
                    مجتمع تولیدی فرآوردانه آریا
                </h2>
                <p className="text-BodyS md:text-BodyM overflow-auto ">
                سپاس بیکران پروردگار یکتا که توانمان بخشید و با الطاف بیکرانش ما را در تاسیس این کارخانه یاری نمود و رهنمودمان نمود در ره خدمت به خلق. شرکت فراوردانه آریا در سال 1391 با هدف خدمت به صنعت طیور کشور و بکارگیری متخصین مجرب ، پیشرفته ترین و مدرن ترین دستگاه ها و همچنین رعایت استانداردهای جهانی اقدام به تولید دان پلت نمود و در مدت زمان کوتاهی با راه اندازی خط دوم ، توان تولید خود را از ده تن در ساعت به دو برابر افزایش داد . این کارخانه در سال 94 راه اندازی خط تولید کنسانتره را با موفقیت آغاز نمود و اولین کنسانتره تولیدی خود را با نام تجاری تاپ سولو به بازار عرضه کرد. این شرکت رضایت مشتریان که در گرو کاهش هزینه های پرورش ، بهبود ضریب تبدیل غذایی و ارائه خدمات پس از فروش میباشد ، را سرلوحه برنامه های خود قرار داد.
                </p>
            </div>
        </div>
     );
}

export default AboutHeader;