import type { Metadata } from "next";
import {ADLaM_Display, Comforter, Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
// google 字体
const inter=ADLaM_Display({
    subsets:['latin'],
    weight:'400'
})
// 本地字体
const myFont=localFont({
    src:'../../public/font/Comforter-Regular.ttf',
    weight:'400'
})
//  根布局
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
          style={{fontFamily:'ADLaM Display'}}
      >
        {children}
      </body>
    </html>
  );
}
