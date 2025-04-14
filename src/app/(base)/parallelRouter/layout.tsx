import {ReactNode} from "react";
import Link from "next/link";

const Layout = ({children,team,analytics}:Readonly<{
    children:React.ReactNode,
    team:React.ReactNode,
    analytics:React.ReactNode,
}>) => {
    return (
        <div>
            <ul className={'flex gap-x-5 text-2xl justify-center'}>
                {/*link跳转为软路由，直接链接跳转为硬路由，需要给其他平行路由中不存在嵌套路由加default.tsx页面(页面内容以实际为准)*/}
                <li>
                    <Link href={'/parallelRouter'}>Home</Link>
                </li>
                <li><Link href={'/parallelRouter/visitors'}>Visitors</Link></li>
            </ul>
            <div className={'flex gap-x-5 mt-2'}>
                {team}
                {analytics}
            </div>
            {children}
        </div>
    );
};

export default Layout;
