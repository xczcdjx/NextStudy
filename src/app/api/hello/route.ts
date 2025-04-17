import {NextResponse} from "next/server";

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
/*
* Next14版本GET会有缓存问题
* 解决方法
* https://nextjs.org/docs/14/app/building-your-application/data-fetching/fetching-caching-and-revalidating
* */
// 设置5s内缓存
export const revalidate=5
export async function GET() {
    // Do whatever you want
    /*return new Response('Hello World!', {
      status: 200,
    });*/
    /*const d = new Date()
    const mm = d.getMonth() + 1
    const m = mm < 10 ? '0' + mm : mm*/
    return NextResponse.json({
        data: 'hello world',
        // time: d.getFullYear() + '-' + m + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
        t:new Date().toLocaleTimeString()
    })
}
