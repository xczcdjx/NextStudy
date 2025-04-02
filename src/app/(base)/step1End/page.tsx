import Image from "next/image";
import {Metadata} from "next";
// next15 不支持此种方式导入
// import bts from '/public/images/bts.jpg'
// 静态元数据
export const metadata:Metadata={
    title:'step1End'
}
export default () => {
    return (
        <div className='h-full'>
            <div className="bgC absolute inset-0 -z-10">
                <Image src={'/images/bts.jpg'} fill={true} style={{objectFit:'cover'}} className={'absolute inset-0'} alt={'bts'}/>
                <div className='absolute inset-0 bg-gradient-to-r from-gray-500'></div>
            </div>
            <h2 className={'text-center text-2xl pt-18'}>Step 1 End Home</h2>
        </div>
    );
};