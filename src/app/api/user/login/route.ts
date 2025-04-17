import {NextRequest, NextResponse} from "next/server";
import {getBody} from "@/utils/bodyParser";

export async function POST(req:NextRequest) {
    try {
        const {username,password}=await getBody<LoginFieldType>(req)
        if (username==='admin'&&password==='123456') {
            const token='Bearer_' + username + password
            const res=NextResponse.json({
                    msg: '登录成功',
                    code: 200,
                    data: {
                        token
                    }
                }/*, {
                headers: {
                    'Set-Cppkies': `token=${token}`
                }
            }*/
            )
            // 设置cookie
            res.cookies.set('token',token,{path:'/',maxAge:86400,httpOnly:true})
            return res
        }
        else throw {
            msg:'账号或密码错误',
            code:400
        }
    }catch (e) {
        return NextResponse.json(e)
    }
}