"use client" // useState 只能在客户端使用，需要指明
import React, {useState} from "react";

export default ({children})=>{
    // template 的状态切换组件不会保存
    const [c,setC]=useState<number>(0)
    return (
        <div>
            <h3>Template Count <span className='text-xl text-orange-400'>{c}</span></h3>
            <div className='my-2'>
                <button className='bg-white text-black p-2 rounded-md' onClick={() => setC(c + 1)}>Increment</button>
            </div>
            {children}
        </div>
    )
}