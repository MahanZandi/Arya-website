import Header from '../components/home-page-componentd/Header';
import Main from '@/components/home-page-componentd/Main';
import Products from '@/components/home-page-componentd/Products';
import Comments from '@/components/home-page-componentd/Comments';
import Members from '@/components/home-page-componentd/Members';
import ContactUs from '@/components/home-page-componentd/ContactUs';
import Footer from '@/components/home-page-componentd/Footer'

const App:React.FC = () => {

  interface Styles {
    darkGreenBtn: string ;
    zirconBtn: string ;
    lightGreenBtn: string ;
    noBorderBtn: string ;
    moreProductInformationBtn: string ;
    formBtn: string ;
    footerBtn: string ;
};

  const styles:Styles = {
    darkGreenBtn : ' bg-Observatory flex justify-center items-center py-[15px] px-[51px] transition-all duration-200 text-white sm:text-[20px] rounded-[20px] w-56 sm:min-w-60 ' ,
    zirconBtn : 'bg-Zircon flex justify-center items-center py-[15px] px-[51px]  transition-all duration-200 text-Observatory sm:text-[20px] border border-Observatory rounded-[20px] w-56 sm:min-w-64 ' ,
    lightGreenBtn : 'bg-AquaSqueeze flex justify-center items-center py-[15px] px-[51px]  transition-all duration-200 text-Observatory sm:text-[20px] rounded-[20px] sm:min-w-64' ,
    noBorderBtn : ' flex justify-center items-center py-[15px] px-4  transition-all duration-200 text-Observatory sm:text-[19px] rounded-[20px] ' ,
    formBtn : 'bg-Observatory flex justify-center items-center py-[15px] px-[51px] transition-all duration-200 text-white sm:text-[20px] h-[60px] rounded-[20px] w-[160px] ' ,
    footerBtn: 'text-BodyL bg-MineShaft text-Alto px-2 pt-2 rounded-t-2xl hover:text-white flex'
   };

  return (
    <div className="bg-Zircon">
      <Header 
          darkGreenBtn={styles.darkGreenBtn}
          zirconBtn={styles.zirconBtn}
          lightGreenBtn={styles.lightGreenBtn}
          noBorderBtn={styles.noBorderBtn}
          />
      <Main/>
      <Products
          lightBtn={styles.moreProductInformationBtn}
      />
      <Comments/>
      <Members/>
      <ContactUs
          darkGreenBtn={styles.formBtn}
      />

      <Footer
          footerBtn={styles.footerBtn}
      />
    </div>
  );
}

export default App;
