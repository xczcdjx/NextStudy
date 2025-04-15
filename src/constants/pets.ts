type petType={id:number}&Record<'title'|'imgUrl'|'desc', string>
export const pets:petType[]=Array.from({length:8},(_,i)=>{
    return {
        id:i+1,
        title:`pet ${i+1}`,
        imgUrl:`http://192.168.124.35:5101/static/pets/${i+1}.png`,
        desc:'pet pet '.padEnd(i+10,String.fromCharCode(97+i))
    }
})