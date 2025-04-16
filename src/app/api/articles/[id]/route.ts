import db from "@/db/lowdb";
import {NextResponse} from "next/server";
interface idPrams{
    id:string
}
/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: 删除文章
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: 文章 ID
 *     responses:
 *       200:
 *         description: 删除成功
 *       404:
 *         description: 未找到数据
 */

export async function DELETE(req:Request,{params}:{params:Promise<idPrams>}){
    const {id}=await params
    console.log(id)
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
/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: 文章详情
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: 文章 ID
 *     responses:
 *       200:
 *         description: 成功返回文章列表
 */
export async function GET(req:Request,{params}:{params:Promise<idPrams>}){
    const {id}=await params
    const data=db.data.posts
    return NextResponse.json({
        code: 200,
        msg: `success`,
        data:data.find(it=>it.id===id)
    })
}