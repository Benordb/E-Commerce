import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
    return (
        <div className="w-[334px] m-auto space-y-10">
            <Link href="/register"><div className="text-black bg-white text-end mx-8">Бүртгүүлэх</div></Link>
            <h1 className="font-semibold text-2xl text-center">Нэвтрэх</h1>
            <div className="space-y-4 text-center text-sm">
                <Input placeholder="Нэр" />
                <Input placeholder="Нууц үг" />
                <Button className="w-full">Нэвтрэх</Button>
                <Link href="/forget">
                    <div className="underline underline-offset-4 text-gray-500 mt-4">Нууц үг мартсан</div>
                </Link>
            </div>
        </div>
    )
}