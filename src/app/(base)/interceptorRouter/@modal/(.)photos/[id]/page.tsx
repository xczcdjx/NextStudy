"use client"
import Image from "next/image";
import {pets} from "@/constants/pets";
import {useParams, useRouter} from "next/navigation";
// 客户端无法使用async
const Page = () => {
    const router=useRouter()
    const {id}=useParams<{id:string}>()
    const obj = pets.find(it => it.id == id)!
    return (
       <div className={'flex justify-center items-center fixed inset-0 bg-gray-500/[.8]'} onClick={()=>{
           router.back()
       }}>
           <Image src={obj.imgUrl} alt={obj.title} style={{objectFit: 'cover', height: '300px'}} width={300}
                  height={300}
                  onClick={(e)=>e.stopPropagation()}
                  className={'rounded-lg block mx-auto'}/>
       </div>
    );
};

export default Page;
