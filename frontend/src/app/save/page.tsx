import { SaveCard } from "@/components/assets";

export default function Save() {
    return (
        <div className="w-[528px] m-auto space-y-6">
            <h1 className="font-bold text-xl">Хадгалсан бараа</h1>
            <div className="space-y-6 pb-6">
                <SaveCard />
                <SaveCard />
                <SaveCard />
            </div>
            <div className="flex justify-between text-lg font-bold">
                <p>Нийт: 5 бараа</p>
                <p>360’000₮</p>
            </div>
        </div>
    )
}