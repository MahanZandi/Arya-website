import Comment from "@/components/home-page-componentd/Comment";
import personImage1 from "@/public/images/person01.jpg";
import personImage2 from "@/public/images/personImage02.jpg";

interface UsersComment {
    id: number;
    email: string;
    name: string;
    comment: string;
    avatar: any; 
}

const Comments:React.FC = () => {

    const usersComment:UsersComment = [
        {id: 1, avatar:personImage1, email:"example21@example.com", name:"alireza", comment:" مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای " },
        {id: 2, avatar:personImage2, email:"examp2321@example.com", name:"mohamad", comment:" مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف  کاربردی می باشد، کتابهای " },
    ]

    return ( 
        <div className="bg-SweetCorn pt-[70px] px-[32px] md:px-[30px] xl:px-[55px] ">
            <div className="flex flex-col justify-center items-center ">
                <h3 className="text-DisplayS sm:text-DisplayL font-extrabold">
                    نظرات مشتریان
                </h3>
                <p className="pt-5 px-5 text-BodyM ">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از 
                </p>
            </div>

            <div className=" py-[60px] grid xl:grid-cols-2 gap-7">
                {usersComment.map(user =>(
                    <Comment 
                        key={user.id}
                        personImage={user.avatar}
                        userEmail={user.email}
                        name={user.name}
                        comment={user.comment}
                        />
                ))}
            </div>
        </div>
     );
}

export default Comments;