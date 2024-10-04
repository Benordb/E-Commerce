"use client"

import { ProductAll } from "@/components/admin"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Product() {
    const [tabs, setTabs] = useState("product")
    return (
        <div className="w-full">
            <div className="h-14 border-b-2">
                <button onClick={() => setTabs("product")} className={`text-sm h-full px-4 py-2 ${tabs == "product" ? "font-bold border-b-4 border-black" : ""}`}>Бүтээгдэхүүн</button>
                <button onClick={() => setTabs("category")} className={`text-sm h-full px-4 py-2 ${tabs == "category" ? "font-bold border-b-4 border-black" : ""}`}>Ангилал</button>
            </div>
            {tabs == "product" ? (<ProductAll />) : null}
        </div>
    )
}