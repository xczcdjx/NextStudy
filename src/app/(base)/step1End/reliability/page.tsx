import {Metadata, ResolvingMetadata} from "next";

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ id?:number }>
}
// 动态路由元信息
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const { id } = await params
    const iid=await searchParams

    /*// fetch data
    const product = await fetch(`https://.../${id}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []*/

    return {
        title: 'reliability'+(iid.id??'111'),
        openGraph: {
            images: ['/some-specific-page-image.jpg'],
        },
    }
}
export default ({ params, searchParams }: Props) => {
    return (
        <div className='h-full max-w-full bg-amber-100'>
            <h2 className={'text-purple-400 text-4xl text-center pt-38'}>We serve high Reliability applications</h2>
        </div>
    );
};