"use client"
import {Button, message} from "antd";
import {useRouter} from "next/navigation";

const Page = () => {
    const router=useRouter()
    const [messageApi,contextHolder]=message.useMessage()
    return (
        <div className={'flex justify-center flex-col items-center'}>
            {contextHolder}
            <h1 className={'text-2xl my-3'}>登录成功，admin</h1>
            <Button onClick={async ()=>{
                const r=await fetch('/api/user/logout',{
                    method:'get'
                })
                const data=await r.json()
                router.replace('/login')
                messageApi.open({
                    type:'success',
                    content:data.msg
                })
            }}>退出登录</Button>
        </div>
    );
};

export default Page;
