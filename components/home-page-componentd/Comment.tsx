import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Comment:React.FC = ({personImage, userEmail, name, comment}:any) => {
  return (
      <div className="rounded-3xl  p-10 bg-white flex md:justify-start justify-center md:flex-row flex-col">
        <div className="md:justify-start justify-center flex">
            <div className="flex flex-col  gap-y-4 ">
                <div className="w-[180px] flex justify-center">
                    <Image className="w-[120px] h-[120px] object-cover rounded-full " src={personImage} alt="person image"/>
                </div>
                <div className="flex items-center flex-col w-[180px]">
                    <p className="text-DisplayXS">{name}</p>
                    <p className="text-BodyS">{userEmail}</p>
                </div>
            </div>
        </div>
        <div className="px-8 "> 
            <div className="md:flex hidden justify-end gap-1.5 text-yellow-400 text-2xl  pb-6">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <p className="md:pt-2 pt-7">{comment}</p>
            <div className="md:hidden">
                <div className="flex justify-center gap-1.5 text-yellow-400 text-2xl pt-6">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Comment;
