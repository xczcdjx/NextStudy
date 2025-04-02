"use client"

import React from "react";
import Link from "next/link";

export default ({children}: Readonly<{
    children: React.ReactNode
}>) => {
    return <div className={'h-screen relative'}>
        <div className='absolute w-full z-10'>
            <div style={{maxWidth: '1080px'}}
                 className="navBar py-5 mx-auto text-xl text-green-500">
                <div className={'mx-5 flex justify-between'}>
                    <div className="logo">
                        <Link href={'/step1End'}>Home</Link>
                    </div>
                    <div className="nav">
                        <ul className='flex gap-x-2'>
                            <li><Link href={'/step1End/performance'}>performance</Link></li>
                            <li><Link href={{pathname:'/step1End/reliability',query:{
                                id:666
                                }
                            }}>reliability</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className={'text-red-400 text-3xl h-full'}>
            {children}
        </div>
    </div>
}