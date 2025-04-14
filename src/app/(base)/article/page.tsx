"use client"
import Link from "next/link";
import {Button} from "antd";
import {useRouter} from "next/navigation";

export default function () {
    const router=useRouter()
    return <div className={'pt-20 text-center text-white'}>
        <h2 className={'text-2xl'}>动态路由 </h2>
        <p><Link href={'/article/2'} className={'text-orange-200'}>单路径跳转</Link></p>
        <Button onClick={()=>{
            router.push('/article/1/2/3')
        }}>
            嵌套路径跳转
        </Button>
        {/*<p><Link href={'/article/q'} className={'text-orange-200'}>可选嵌套路径跳转</Link></p>*/}
    </div>

}