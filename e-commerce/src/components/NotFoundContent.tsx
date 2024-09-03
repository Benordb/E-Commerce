"use client"
import { useRouter } from "next/navigation"
import { NotFoundSVG } from "./assets"



export const NotFoundContent = () => {
    const router = useRouter()
    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center pb-32">
            <NotFoundSVG />
            <button onClick={() => router.replace("/")} className="text-sm px-4 py-2 bg-buttonP rounded-sm text-white">Нүүр хуудас</button>
        </div>
    )
}