import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Register() {
    return (
        <div className="w-[334px] m-auto space-y-10">
            <Link href="/login"><div className="text-black bg-white text-end mx-8">Нэвтрэх</div></Link>
            <h1 className="font-semibold text-2xl text-center">Бүртгүүлэх</h1>
            <div className="space-y-4 text-center text-sm">
                <Input placeholder="Нэр" />
                <Input placeholder="Имэйл хаяг" />
                <Input placeholder="Нууц үг" />
                <Input placeholder="Нууц үг давтах " />
                <ul className="text-start list-disc list-inside mx-2">
                    <li>Том үсэг орсон байх</li>
                    <li>Жижиг үсэг орсон байх</li>
                    <li>Тоо орсон байх</li>
                    <li>Тэмдэгт орсон байх</li>
                </ul>
                <Button className="w-full">Үүсгэх</Button>
            </div>
        </div>
    )
}