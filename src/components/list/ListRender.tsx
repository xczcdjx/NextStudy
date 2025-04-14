"use client"
import {listData, ListType} from "@/constants/list";
import {Avatar, List} from "antd";
import React from "react";
import {useRouter} from "next/navigation";

export const ListRender=()=>{
    const router=useRouter()
    return <List
        itemLayout="horizontal"
        dataSource={listData}
        renderItem={(item:ListType, index) => (
            <List.Item onClick={()=>{
                router.push(`/list/${item.id}`)
            }}>
                <List.Item.Meta
                    className='!items-center'
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.desc}
                />
            </List.Item> as React.ReactNode
        )}
    />
}