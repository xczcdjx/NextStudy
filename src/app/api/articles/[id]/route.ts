import db from "@/db/lowdb";
import {NextResponse} from "next/server";
interface idPrams{
    id:string
}
export async function DELETE(req:Request,{params}:{params:Promise<idPrams>}){
    const {id}=await params
    const data=db.data.posts
    const index=data.findIndex(it=>it.id===id)
    if (index!==-1){
        await db.update(({posts})=>posts.splice(index,1))
        return NextResponse.json({
            code: 200,
            msg: `${id} - 删除成功`,
        })
    }
    return NextResponse.json({
        code: 404,
        msg: 'no data',
    })
}
export async function GET(req:Request,{params}:{params:Promise<idPrams>}){
    const {id}=await params
    const data=db.data.posts
    return NextResponse.json({
        code: 200,
        msg: `success`,
        data:data.find(it=>it.id===id)
    })
}