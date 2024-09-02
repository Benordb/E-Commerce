import Link from "next/link"
import { Container } from "./assets"
import { Input } from "./ui/input"

export const Footer = () => {
    return (
        <Container background="bg-[#EEEFFB]">
            <div className="grid grid-cols-4 pt-24 pb-36 ">
                <div className="col-span-2 space-y-6">
                    <h1 className="text-3xl font-extrabold">eCommerce</h1>
                    <div className="w-80 relative">
                        <Input placeholder="Имэйл хаяг" className="bg-white" />
                        <div style={{ height: 'calc(100% - 4px)' }} className="absolute flex items-center justify-center top-0 right-0 w-32 m-[2px] rounded-md text-white bg-buttonP">
                            Бүртгүүлэх
                        </div>
                    </div>
                    <div className="max-w-[484px] space-y-2 text-[#8A8FB9]">
                        <p>Хаяг</p>
                        <p>Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
                            Гурван гол - 401 тоот</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-extrabold">Ангилал</h1>
                    <ul className="text-[#8A8FB9] space-y-5 mt-8">
                        <li className="hover:underline hover:underline-offset-4"><Link href="/">Хувцас</Link></li>
                        <li className="hover:underline hover:underline-offset-4"><Link href="/">Камер, хэрэгсэл</Link></li>
                        <li className="hover:underline hover:underline-offset-4"><Link href="/">Ухаалаг утас, таблет</Link></li>
                        <li className="hover:underline hover:underline-offset-4"><Link href="/">Чихэвч</Link></li>
                        <li className="hover:underline hover:underline-offset-4"><Link href="/">Гэр ахуйн бараа</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-extrabold">Бусад</h1>
                    <ul className="text-[#8A8FB9] space-y-5 mt-8">
                        <li className="hover:underline hover:underline-offset-4"><Link href="/">Бидний тухай</Link></li>
                        <li className="hover:underline hover:underline-offset-4"><Link href="/">Холбоо барих</Link></li>
                        <li className="hover:underline hover:underline-offset-4"><Link href="/">Түгээмэл асуулт хариулт</Link></li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}