import {NextResponse} from "next/server";

export async function GET() {
    const res=NextResponse.json({
        msg:'登出成功',
        code:200
    })
    res.cookies.set('token','',{maxAge:0})
    return res
}