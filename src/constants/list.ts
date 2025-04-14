export type ListType={
    id:number,
    title:string
    desc:string
}
export const listData:ListType[] = Array.from({length:6},(_,i)=>({
    id:i+1,
    title:'Ant Design Title'+(i+1),
    desc:'Ant Design, a design language for background applications, is refined by Ant UED Team'+(i+1)
}))