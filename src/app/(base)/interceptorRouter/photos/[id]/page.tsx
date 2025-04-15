import Image from "next/image";
import {pets} from "@/constants/pets";

const Page = async ({params}: { params: Promise<{ id: string }> }) => {
    const {id} = await params
    const obj = pets.find(it => it.id == id)
    return (
        <div className={'container mx-auto pt-8'}>
            {obj && <>
                <Image src={obj.imgUrl} alt={obj.title} style={{objectFit: 'cover', height: '200px'}} width={200}
                       height={200}
                       className={'rounded-lg block mx-auto'}/>
                <div className={'border-2 border-dashed border-gray-500 rounded-lg p-3 mt-5'}>
                    <p><strong>Title:</strong>{obj.title}</p>
                    <p><strong>Price:</strong>{obj.id}</p>
                    <p><strong>Desc:</strong>{obj.desc}</p>
                </div>
            </> || <div>No data</div>}
        </div>
    );
};

export default Page;
