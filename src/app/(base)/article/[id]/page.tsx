/*export async function generateStaticParams() {
    const posts = await new Promise((resolve, reject) => {
        setTimeout(()=>resolve([{id:'13'},{id:'33'}]),2000)
    })
    console.log(posts)
    return posts.map((post) => ({
        id: post.id,
    }))
}*/
export default async function ({
    params
                               }:{params:Promise<{id:string}>}){
    const {id}=await params
    return <div className='text-white'>
        article detail id: {id}
    </div>

}