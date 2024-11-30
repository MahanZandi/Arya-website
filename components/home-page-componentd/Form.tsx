"use client"
import { useForm } from 'react-hook-form';
import React ,{ useState, useEffect } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { LuSubtitles } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import MyButton from "./MyButton";

const Form:React.FC = ({darkGreenBtn}:any) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
      }:any = useForm();

      const onSubmit = (data: string | number) => {
        console.log(data)
      }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
          className="py-[60px]">
        <div className="grid grid-rows-5 gap-[15px] sm:gap-[10px] ">
            <div className=" flex items-center border border-gray-400 h-[60px] rounded-3xl ">
                <section className="flex w-full justify-center items-center pr-5">
                    <input 
                        className=" h-[58px] border-gray-400  placeholder-black outline-none p-5 flex flex-1 placeholder-animate  " 
                        placeholder="نام و نام خانوادگی"
                        type="text"  
                        name='name'
                        {...register("name", {
                            required: "فرم نام و نام خانوادگی نمیتواند خالی باشد!",
                            minLength: {
                                value: 3,
                                message: "فرم نام و نام خانوادگی باید حداقل 3 کاراکتر داشته باشد"
                              }
                          })}
                        />
                    <div className="border-r-2 h-5"/>
                    <div className="p-5 pr-2">
                        <IoPersonSharp className="text-Observatory " size={20}/>
                    </div>
                </section>
            </div>
            <div className=" flex items-center border border-gray-400 h-[60px] rounded-3xl ">
                <section className="flex w-full justify-center items-center pr-5">
                    <input 
                        className=" h-[58px] border-gray-400 placeholder-black outline-none p-5 flex flex-1 placeholder-animate  " 
                        placeholder="ایمیل شما"
                        type="email"  
                        name='email'
                        {...register("email", {
                            required: "فرم ایمیل نمیتواند خالی باشد !",
                            pattern: {
                              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                              message: "ایمیل شما نا معتبر است!"
                            }
                          })}
                        />
                    <div className="border-r-2 h-5"/>
                    <div className="p-5 pr-2">
                        <MdOutlineAttachEmail className="text-Observatory " size={20}/>
                    </div>
                </section>
            </div>
            <div className=" flex items-center border border-gray-400 h-[60px] rounded-3xl ">
                <section className="flex w-full justify-center items-center pr-5">
                    <input 
                        className=" h-[58px] border-gray-400 placeholder-black outline-none p-5 flex flex-1 placeholder-animate  " 
                        placeholder="شماره تماس"
                        type="number"
                        name='phone'
                        {...register("phone", {
                            required: "فرم شماره تماس نمیتواند خالی باشد!",
                            minLength: {
                                value: 11,
                                message: "فرم شماره تماس باید حداقل 11 کاراکتر داشته باشد!"
                              }
                          })}
                        />
                    <div className="border-r-2 h-5"/>
                    <div className="p-5 pr-2">
                        <BiPhoneCall className="text-Observatory " size={22}/>
                    </div>
                </section>
            </div>
            <div className=" flex items-center border border-gray-400 h-[60px] rounded-3xl ">
                <section className="flex w-full justify-center items-center pr-5">
                    <input 
                        className=" h-[58px] border-gray-400 placeholder-black outline-none p-5 flex flex-1 placeholder-animate  " 
                        placeholder="عنوان"
                        type="text"
                        name='title'
                        {...register("title", {
                            required: "فرم عنوان نمیتواند خالی باشد!",
                            minLength: {
                                value: 3,
                                message: "فرم عنوان باید حداقل 3 کاراکتر داشته باشد!"
                              }
                          })}
                        />
                    <div className="border-r-2 h-5"/>
                    <div className="p-5 pr-2">
                        <LuSubtitles className="text-Observatory " size={20}/>
                    </div>
                </section>
            </div>
            <div className=" flex items-center border border-gray-400 h-[60px] rounded-3xl ">
                <section className="flex w-full justify-center items-center pr-5">
                    <textarea 
                        className=" h-[58px] border-gray-400  resize-none placeholder-black outline-none p-5 flex flex-1 placeholder-animate " 
                        placeholder="توضیحات"
                        name='discription'
                        {...register("discription", {
                            required: "فرم توضیحات نمیتواند خالی باشد!",
                            minLength: {
                                value: 3,
                                message: "فرم توضیحات باید حداقل 3 کاراکتر داشته باشد!"
                              }
                          })}
                        />
                    <div className="border-r-2 h-5"/>
                    <div className="p-5 pr-2">
                        <FaRegCommentDots className="text-Observatory " size={20}/>
                    </div>
                </section>
            </div>
        </div>
        <div className="flex gap-4 items-start pt-5">
            <MyButton
                btnText="ارسال"
                style={darkGreenBtn}
                icone=""
                btnType="submit"
            />
            <div className='grid gap-1 sm:gap-2  text-red-500 font-semibold'>
                    {errors.name && <p className='slide-in-top'>{errors.name.message}</p>}
                    {errors.email && <p className='slide-in-top'>{errors.email.message}</p>}
                    {errors.phone && <p className='slide-in-top'>{errors.phone.message}</p>}
                    {errors.title && <p className='slide-in-top'>{errors.title.message}</p>}
                    {errors.discription && <p className='slide-in-top'>{errors.discription.message}</p>}
            </div>
        </div>
    </form>
  );
}

export default Form;
