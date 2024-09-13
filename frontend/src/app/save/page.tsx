"use client"
import { SaveCard } from "@/components/assets";
import { useData } from "@/components/utils/dataProvider";

export default function Save() {
    const { saveProduct } = useData()
    return (
        <div className="w-[528px] m-auto space-y-6">
            <h1 className="font-bold text-xl">Хадгалсан бараа</h1>
            <div className="space-y-6 pb-6">
                {saveProduct.map((item, index) => <SaveCard id={item} key={index} />)}
            </div>
            <div className="flex justify-between text-lg font-bold">
                <p>Нийт: {saveProduct.length} бараа</p>
                <p>360’000₮</p>
            </div>
        </div>
    )
}