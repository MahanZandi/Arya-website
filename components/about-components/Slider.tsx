"use client";
import AboutNavBar from '@/components/about-components/AboutNavBar';
import AboutHeader from './AboutHeader';
import AboutMembers from '@/components/about-components/AboutMembers';

const Slider = ({noBorderBtn, lightGreenBtn, zirconBtn, darkGreenBtn}:any) => {
  return (
    <div className="scroll-container snap-mandatory text-MineShaft">
        <div className="">
            <div className="section section1 bg-Alto space-x "> 
                <AboutNavBar
                    darkGreenBtn={darkGreenBtn}
                    zirconBtn={zirconBtn}
                    lightGreenBtn={lightGreenBtn}
                    noBorderBtn={noBorderBtn}
                />
                <AboutHeader
                    darkGreenBtn={darkGreenBtn}
                    zirconBtn={zirconBtn}
                    lightGreenBtn={lightGreenBtn}
                    noBorderBtn={noBorderBtn}
                />
            </div>
            <div className="section "> 
                <div className="grid place-items-center py-10 md:py-0 bg-Observatory h-screen space-x">
                    <div className='bg-white shadow p-10 rounded-3xl grid gap-3'>
                        <h1 className='text-BodyL xl:text-DisplayS font-semibold'>
                        شرکت مجتمع تولیدی خوراک دام و طیور فرآوردانه آریا
                        </h1>
                        <p className='text-BodyS overflow-auto md:text-BodyM xl:leading-8 h-96 md:h-auto'>
                        عوامل موثر بر ارزش غذایی اقلام مورد استفاده در خوراک دام و طیورتمام حیوانات به مقادیر معینی از مواد مغذی نیاز دارند که اگر به حد کافی و متعادل دریافت نکنند، در وضعیت نامناسب تغذیه ای قرار خواهند گرفت. در چنین وضعیتی، بازدهی تولید و سلامت آنها دچار اختلال می شود. هرگاه اختلالات تغذیه ای شدید باشد، ممکن است حتی به مرگ حیوان منجر شود. تأمین مواد مغذی برای حیوان، از طریق مواد خوراکی فراهم می شود. خوراک ها از نظر کیفیت فیزیکی و مواد مغذی تنوع بسیار زیادی دارند. ارزش غذایی یک ماده خوراکی مشخص ممکن است از منطقه ای به منطقه دیگر بسیار متغیر باشد. برای تامین احتیاجات غذایی حیوانات مزرعه ای در مرحله اول نیاز به شناخت مواد مغذی مورد نیازحیوان در وضعیت های مختلف نگهداری، تولید وغیره است و در مرحله بعد نیاز به شناخت مواد خوراکی و ترکیبات مغذی موجود در آنها خواهد بود. در این صورت است که امکان تأمین جیره های متعادل فراهم خواهد شد. بنابراین توجه به افزایش راندمان تولید حیوانات مزرعه ای زمینه ی پژوهش و تحقیق در مورد شناخت و تعیین احتیاجات غذایی دام و نیز شناخت اقلام خوراکی و ارزش غذایی آنها را فراهم ساخت با توجه به اینکه بیشترین سهم هزینه پرورش دام و طیور را تغذیه به خود اختصاص میدهد(۶۰ تا ۷۰ درصد هزینه ها) بنابراین تولید بالا با هزینه کم، بدون تغذیه صحیح وعلمی امکان پذیر نیست و این خود مستلزم تشخیص احتیاجات غذایی دام و شناخت ترکیبات خوراک از نظر مواد مغذی است. اکثر کارشناسان و دامپروران کشور از جداول ترکیبات مواد خوراکی تهیه شده در سایر کشورها مانندARC وNRC استفاده میکنند که می تواند با خطا همراه باشد. علت این امر را میتوان به وجود تفاوت در ارزش غذایی اقلام خوراکی مورد استفاده دام و طیور موجود در کشور با خوراک های مشابه در مناطق دیگر دنیا مربوط دانست.
                        </p>
                    </div>
                </div>
            </div>
            <div className="xl:section "> 
                <div className=" bg-Alto grid place-items-center">
                    <AboutMembers/>
                </div>
            </div>
            <div className='section'>
                <div className='bg-Alto'>

                </div>
            </div>
        </div>
    </div>
  );
}

export default Slider;