import React from "react";
import {Metadata} from "next";
import {ListRender} from "@/components/list/ListRender";
// Metadata 与 "use client"无法一起使用
export const metadata:Metadata={
    title:'文章列表'
}

export default function () {
    return (<div>
        <h2 className={'text-center text-3xl'}>List</h2>
        <ListRender/>
    </div>)
}