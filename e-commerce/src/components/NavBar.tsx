import { Input } from "./ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LuChevronDown, LuSearch } from "react-icons/lu";

export const NavBar = () => {
    return (
        <div className="max-w-[1230px] m-auto flex justify-between py-4">
            <div className="flex items-center">
                <h1 className="mr-16">Ecommerce</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-buttonP">
                        Нүүр
                        <LuChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                        <DropdownMenuItem>Themes</DropdownMenuItem>
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <h2 className="ml-6">Ангилал</h2>
            </div>
            <div className="relative w-80">
                <Input />
                <div className="absolute flex items-center justify-center top-0 right-0 w-12 h-full rounded-r-md text-white bg-buttonP">
                    <LuSearch className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}