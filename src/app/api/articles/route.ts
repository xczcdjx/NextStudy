import {NextRequest, NextResponse} from "next/server";
import db from "@/db/lowdb";
import {getBody} from "@/utils/bodyParser";
/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: 获取文章列表
 *     description: 分页获取文章，可通过 query 参数过滤
 *     parameters:
 *       - in: query
 *         name: pageNo
 *         schema:
 *           type: integer
 *         description: 页码
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *         description: 每页数量
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         description: 模糊查询关键词
 *     responses:
 *       200:
 *         description: 成功返回文章列表
 */
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
/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: 新增文章
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addPostDto'
 *     responses:
 *       200:
 *         description: 修改成功
 */
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
/**
 * @swagger
 * /api/articles:
 *   patch:
 *     summary: 修改文章
 *     description: 根据 ID 修改文章内容
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/upPostDto'
 *     responses:
 *       200:
 *         description: 修改成功
 *       404:
 *         description: no data
 */

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