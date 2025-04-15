import {NextRequest, NextResponse} from "next/server";
import db from "@/db/lowdb";
import {getBody} from "@/utils/bodyParser";

export async function GET(req: NextRequest) {
    const search=req.nextUrl.searchParams
    const pageNo=Number(search.get('pageNo'))||1
    const pageSize=Number(search.get('pageSize'))||10
    const query=search.get('query')
    const data=db.data.posts
    let filterData=query?data.filter(it=>{
        const {id,...p}=it
        return Object.values(p).some(v=>String(v).toLowerCase().includes(query.toLowerCase()))
    }):data
    const limit=pageSize*(pageNo-1)
    const offset=Math.min(limit+pageSize,filterData.length)
    // const offset2=pageSize*pageNo
    return NextResponse.json({
        code: 200,
        msg: '获取成功',
        data:{
            records:filterData.slice(limit,offset),
            pageNo,pageSize,
            total:filterData.length
        },
    })
}

export async function POST(req: Request) {
    try {
        const data = await getBody<Omit<PostType, 'id'>>(req)
        const pData={
            ...data,
            id: Math.random().toString(36).slice(-8),
        }
        await db.update(({posts}) => posts.unshift(pData))
        return NextResponse.json({
            code: 200,
            msg: '新增成功',
            data:pData
        })
    }catch (e) {
        return NextResponse.json(e)
        // return NextResponse.error()
    }
}

export async function PATCH(req: Request) {
    try {
        const body = await getBody<PostType>(req)
        const data=db.data.posts
        const index=data.findIndex(it=>it.id===body.id)
        if (index!==-1){
            const res={...body,views:data[index].views}
            await db.update(({posts}) => {
                posts[index]=res
            })
            return NextResponse.json({
                code: 200,
                msg: `${body.id} - 修改成功`,
                data:res
            })
        }
        throw {
            code: 404,
            msg: 'no data',
        }
    }catch (e) {
        return NextResponse.json(e)
    }
}