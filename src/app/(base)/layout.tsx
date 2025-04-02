import "../globals.css";
import {Header} from "@/components/Header";
//  根布局
export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}
