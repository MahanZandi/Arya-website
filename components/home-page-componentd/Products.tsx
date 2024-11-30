"use client";

import pishDan from "../public/images/pishDan.png";
import miyanDan from "../public/images/miyanDan.png";
import payanDan from "../public/images/payanDan.png"
import "keen-slider/keen-slider.min.css";
import Product from "./Prouduct";


interface ProductTypes {
    id: number ;
    title: string ;
    discription: string ;
    category : string ;
    picture: any ;
};

const myProducts: ProductTypes[] = [
    // {id: 1, title:"آریا فید", discription:"خوراک دامی", category: "خوراک آماده طیور", picture:productImage2},
    // {id: 2, title:"سوپر استارتر", discription:"خوراک دامی", category: "خوراک آماده طیور", picture:superStarDAn},
    {id: 1, title:"پیش دان", discription:"خوراک دامی", category: "خوراک آماده طیور", picture:pishDan},
    {id: 2, title:"میان دان", discription:"خوراک دامی", category: "خوراک آماده طیور", picture:miyanDan},
    {id: 3, title:"پایان دان", discription:"خوراک دامی", category: "خوراک آماده طیور", picture:payanDan},
];


const Products: React.FC = ({lightBtn}:any) => {

  return (
    <div className=" mb-[850px] sm:mb-[880px] lg:mb-0 px-[32px] md:px-[30px] xl:px-[55px] text-MineShaft">
        <div className="grid place-items-center px-6">
            <h3 className=" xl:text-DisplayL md:text-DisplayM text-DisplayS font-extrabold">
                محصولات ما :
            </h3>
            <p className="text-BodyM pt-5 pb-10">
                برای اطلاعات بیشتر راجب محصولات ما رو اطلاعات بیشتر زیر محصولات کلیک کنید
            </p>
        </div>
      <div className="h-[550px]">
        <div className="grid lg:grid-cols-3 gap-[30px] sm:gap-[20px] lg:gap-[30px]">
            {myProducts.map(product => (
                <div key={product.id}>
                <Product 
                  product={product}
                  lightBtn={lightBtn}
                />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
