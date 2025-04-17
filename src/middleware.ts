import {NextRequest, NextResponse} from "next/server";

export function middleware(req:NextRequest) {
    // console.log(request.nextUrl.pathname,'👎')
    // 路径重定向
    /*if (req.nextUrl.pathname.startsWith('/xxx')){
        return NextResponse.rewrite(new URL('/parallelRouter',req.url))
    }*/
    const token=req.cookies.get('token')?.value
    const path=req.nextUrl.pathname
    if (!!token){
        if (path.startsWith('/login')){
            return NextResponse.rewrite(new URL('/info',req.url))
        }else {

        }
    }else {
        if (path.startsWith('/info')){
            return NextResponse.rewrite(new URL('/login',req.url))
        }
    }
}
// 匹配下方页面执行上方逻辑
export const config={
    // matcher:'/about/:path'
    // matcher:['/about','/article']
    // matcher:['/about/:path*','/article/:path*']
    // 匹配除下方之外的路径
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}