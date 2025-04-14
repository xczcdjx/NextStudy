import {listData} from "@/constants/list";
import {Card} from "antd";
import {Metadata} from "next";
// 动态路由参数
export async function generateMetadata({params}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const {id} = await params
    return {
        title: `博客详情 - ${id}`
    }
}

export default async ({params}: {
    params: Promise<{ id: string }>
}) => {
    const {id} = await params
    const detail = listData.find(it => it.id == id) || {id, title: 'unmatched', desc: 'error message'}
    return (
        <div>
            <Card title={detail.title}>
                <p>{detail.desc}</p>
            </Card>
        </div>
    )
}