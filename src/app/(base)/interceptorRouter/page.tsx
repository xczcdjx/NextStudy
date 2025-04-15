"use client"
import {Card} from "antd";
import {pets} from "@/constants/pets";
import {ReactNode} from "react";
import {css} from "@emotion/react";
import Image from "next/image";
import {useRouter} from "next/navigation";

const {Meta} = Card
const Page = () => {
    const router=useRouter()
    return (
        <div className={'h-screen grid place-items-center'}>
            <div>
                <h2>路由拦截</h2>
                <ul>
                    {
                        pets.map(it => <li key={it.id}>
                            <Card hoverable style={{width: 200}}
                                  onClick={()=>{
                                      router.push(`/interceptorRouter/photos/${it.id}`,{
                                          scroll:true
                                      })
                                  }}
                                  cover={<Image alt={it.title} src={it.imgUrl}
                                                style={{objectFit: 'cover', height: '180px'}}
                                                width={180}
                                                height={180}/> as ReactNode}>
                                <Meta title={it.title} description={it.desc}/>
                            </Card>
                        </li>)
                    }
                </ul>
                <style jsx>
                    {`
                        h2 {
                            font-size: 25px;
                            font-weight: bold;
                            text-align: center;
                            line-height: 50px;
                        }

                        ul {
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: 10px;
                        }
                    `}
                </style>
            </div>
        </div>
    );
};

export default Page;
