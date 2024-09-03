"use client"
import { PropsWithChildren, useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { LuHeart, LuSearch, LuShoppingCart } from "react-icons/lu";
type AddedProductsCardProps = {
    title: string,
    price: number,
    colors: string[],
    images: string[]
} & PropsWithChildren
export const AddedProductsCard = ({ title, price, colors, images }: AddedProductsCardProps) => {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
    const stringPrice = (price: number): string => {
        if (price > 0) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
        }
        return "0₮"
    }
    return (
        <div ref={hoverRef} className='text-textB space-y-4'>
            <div className={`w-[270px] h-[280px] flex items-center justify-center duration-300 relative ${isHover ? 'bg-[#EBF4F3]' : 'bg-[#F6F7FB]'}`}>
                <div style={{
                    backgroundImage: `url(${images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} className='w-48 h-48'>
                    <div className='absolute w-full h-full top-0 left-0 overflow-hidden'>
                        <div className={`flex flex-col gap-2 duration-700  absolute bottom-3  ${isHover ? 'left-3' : '-left-7'}`}>
                            <div className='flex items-center justify-center w-7 h-7 rounded-full hover:bg-white'><LuShoppingCart /></div>
                            <div className='flex items-center justify-center w-7 h-7 rounded-full hover:bg-white'><LuHeart /></div>
                            <div className='flex items-center justify-center w-7 h-7 rounded-full hover:bg-white'><LuSearch /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h3 className='font-extrabold'>{title}</h3>
                <div className="flex items-center space-x-2" >
                    {colors.map((color, index) => (
                        <div key={index} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                    ))}
                </div>
                <p>{stringPrice(price)}</p>
            </div>
        </div>
    )
}
