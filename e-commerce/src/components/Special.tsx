"use client"
import { useState } from "react"
import { Container, SpecialCard } from "./assets"

export const Special = () => {
    const [indicator, setIndicator] = useState<number>(3)
    return (
        <Container background="bg-white">
            <div >
                <h1 className="text-center font-extrabold text-textB text-3xl mt-20 mb-10">Онцлох бүтээгдэхүүн</h1>
                <div className="flex justify-between gap-4">
                    <SpecialCard />
                    <SpecialCard />
                    <SpecialCard />
                    <SpecialCard />
                </div>
                <div className="mt-14 mb-96 h-1 flex gap-2 justify-center">
                    <div className={`w-4 rounded-lg h-full duration-700  ${indicator === 1 ? 'bg-red-500 w-6' : 'bg-red-300'}`}></div>
                    <div className={`w-4 rounded-lg h-full duration-700  ${indicator === 2 ? 'bg-red-500 w-6' : 'bg-red-300'}`}></div>
                    <div className={`w-4 rounded-lg h-full duration-700  ${indicator === 3 ? 'bg-red-500 w-6' : 'bg-red-300'}`}></div>
                    <div className={`w-4 rounded-lg h-full duration-700  ${indicator === 4 ? 'bg-red-500 w-6' : 'bg-red-300'}`}></div>
                </div>
            </div>
        </Container>
    )
}