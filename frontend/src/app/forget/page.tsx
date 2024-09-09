import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Forget() {
    return (
        <div className="w-[334px] m-auto space-y-10">
            <h1 className="font-semibold text-2xl text-center">Нууц үг сэргээх</h1>
            <div className="space-y-4 text-center text-sm">
                <Input placeholder="Имэйл хаяг оруулах" />
                <Button className="w-full">Үүсгэх</Button>
            </div>
        </div>
    )
}