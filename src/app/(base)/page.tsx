import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<div className='grid place-items-center pt-20'>
    <p>我是根页面2</p>
    <ul>
      <li><Link href={'/count'}>go count</Link></li>
      <li><Link href={'/test'}>go test</Link></li>
      <li><Link href={'/step1End'}>go step1End</Link></li>
    </ul>
  </div>);
}
