import Link from "next/link";

export default function () {

    return <div className={'pt-20 text-center'}>
        <h2 className={'text-2xl'}>动态路由 </h2>
        <p><Link href={'/article/2'} className={'text-orange-200'}>单路径跳转</Link></p>
        <Button>
            嵌套路径跳转
        </Button>
        {/*<p><Link href={'/article/q'} className={'text-orange-200'}>可选嵌套路径跳转</Link></p>*/}
    </div>

}