import { Container } from "./assets"
import { LuUser, LuHeart, LuPhoneCall, LuMail, LuShoppingCart } from "react-icons/lu";

export const Header = () => {
    return (
        <Container background="bg-[#7E33E0]">
            <div className="flex justify-between items-center text-white py-2 px-8">
                <div className="flex gap-16">
                    <div className="flex gap-2 items-center hover:text-buttonP"><LuMail />info@ecommerce.mn</div>
                    <div className="flex gap-2 items-center hover:text-buttonP"><LuPhoneCall />77123456</div>
                </div>
                <div className="flex gap-6">
                    <button className="flex gap-1 items-center hover:text-buttonP">Нэвтрэх<LuUser /></button>
                    <button className="flex gap-1 items-center hover:text-buttonP">Хадгалах<LuHeart /></button>
                    <button><LuShoppingCart className="w-6 h-6 hover:text-buttonP" /></button>
                </div>
            </div>
        </Container>
    )
}