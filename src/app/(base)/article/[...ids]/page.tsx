// catch-all-segments
// 还有可选的 catch-all-segments 格式[[...ids]]
export default async function ({
                                   params
                               }:{params:Promise<string[]>}){
    const {ids}=await params
    return <div>
        article detail ids: {ids}
    </div>

}