import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<div className='grid place-items-center pt-20'>
    <p>我是根页面</p>
    <ul>
      <li><Link href={'/count'}>go count</Link></li>
      <li><Link href={'/test'}>go test</Link></li>
      <li><Link href={'/step1End'}>go step1End</Link></li>
      <li><Link href={'/article'}>go Article</Link></li>
      <li><Link href={'/list'}>go List</Link></li>
      <li><Link href={'/parallelRouter'}>go parallelRouter</Link></li>
      <li><Link href={'/interceptorRouter'}>go interceptorRouter</Link></li>
      <li><Link href={'/login'}>go Login</Link></li>
      <li><Link href={'/info'}>go Info</Link></li>
    </ul>
  </div>);
}
