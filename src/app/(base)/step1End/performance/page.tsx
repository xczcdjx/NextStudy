import Image from "next/image";
import {Metadata} from "next";
export const metadata:Metadata={
    title:'performance'
}
export default () => {
    return (
        <div className='h-full'>
            <div className="bgC absolute inset-0 -z-10">
                <Image src={'/images/sky.jpg'} fill={true} style={{objectFit: 'cover'}} className={'absolute inset-0'}
                       alt={'bts'}/>
                <div className='absolute inset-0 bg-gradient-to-r from-red-200'></div>
            </div>
            <h2 className={'text-orange-400 text-3xl text-center pt-28'}>We serve high Performance applications</h2>
        </div>
    );
};