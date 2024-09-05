"use client"
import { PropsWithChildren, useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { LuHeart, LuSearch, LuShoppingCart } from "react-icons/lu";
type HighLightCardProps = {
    title: string,
    price: number,
    images: string[]
} & PropsWithChildren;
export const HighLightCard = ({ title, price, images }: HighLightCardProps) => {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
    return (
        <div ref={hoverRef} className="w-64 h-96 shadow-xl">
            <div className={`flex items-center justify-center duration-300 py-2 relative`}>
                <div style={{
                    backgroundImage: `url(${images[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} className=" w-56 h-56 "></div>
                <div className='w-full h-full absolute flex justify-center overflow-hidden'>
                    <div className={`flex gap-2 duration-700  absolute left-3  ${isHover ? 'top-3' : '-top-6'}`}>
                        <div className='flex items-center justify-center w-7 h-7 rounded-full text-blue-500 hover:bg-[#EEEFFB] hover:text-[#2F1AC4]'><LuShoppingCart /></div>
                        <div className='flex items-center justify-center w-7 h-7 rounded-full text-blue-500 hover:bg-[#EEEFFB] hover:text-[#2F1AC4]'><LuHeart /></div>
                        <div className='flex items-center justify-center w-7 h-7 rounded-full text-blue-500 hover:bg-[#EEEFFB] hover:text-[#2F1AC4]'><LuSearch /></div>
                    </div>
                    <button className={`absolute rounded-md text-xs text-white bg-green-500 px-4 py-2 duration-700 ${isHover ? 'bottom-2' : '-bottom-10'}`}>дэлгэрэнгүй</button>
                </div>
            </div>
            <div className='h-36 overflow-hidden'>
                <div className={`h-full flex flex-col items-center justify-between  duration-300 pt-4 pb-6 ${isHover ? '' : ''}`}>
                    <p className={`w-40  text-center ${isHover ? 'z-10 text-white duration-700 ease-in' : 'text-buttonP'}`}>{title}</p>
                    <p className={isHover ? 'z-10 text-white' : ''}>750’000₮</p>
                </div>
                <div className={isHover ? 'h-full -translate-y-full duration-700 bg-' : ''}>
                    <div className='h-full bg-[#2F1AC4]'></div>
                </div>
            </div>
        </div>
    )
}