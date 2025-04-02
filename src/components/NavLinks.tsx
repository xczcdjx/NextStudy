import {usePathname} from "next/navigation";
import Link from "next/link";
import React from "react";

export const NavLinks = () => {
    const pathname=usePathname()
    const navs=[
        {l:'About',to:'/about'},
        {l:'Setting',to:'/setting'},
    ]
    return (
        <ul className='flex gap-4 font-bold text-lg mb-4'>
            {
                navs.map(it => <li key={it.to}>
                    <Link className={`link ${pathname==='/count'+it.to?'text-purple-500':'text-white'}`} href={'/count'+it.to}>{it.l}</Link>
                </li>)
            }
        </ul>
    );
};
