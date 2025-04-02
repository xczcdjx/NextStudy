"use client"
import React, {useState} from "react";
import {NavLinks} from "@/components/NavLinks";
export default ({children}: Readonly<{
    children: React.ReactNode
}>) => {
    // layout 的状态切换组件会保存
    const [c, setC] = useState<number>(0)
    return (
        <div className='border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10'>
            <NavLinks/>
            <h3>Layout Count  <span className='text-xl text-sky-300'>{c}</span></h3>
            <div className='my-2'>
                <button className='bg-white text-black p-2 rounded-md' onClick={() => setC(c + 1)}>Increment</button>
            </div>
            {children}
        </div>
    );
};
