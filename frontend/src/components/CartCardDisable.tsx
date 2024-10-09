import Image from 'next/image'
import React from 'react'

interface CartCardProps {
    image: string,
    name: string,
    price: number,
    salePercent?: number,
    size: string,
    quantity: number,
}
export const CartCardDisable = ({ image, name, price, salePercent, size, quantity }: CartCardProps) => {
    const stringPrice = () => {
        if (salePercent) {
            const productPrice = (price - (price * salePercent / 100)) * quantity
            return productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
        }
        const productPrice = price * quantity
        return productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
    }
    const stringPriceOne = () => {
        if (salePercent) {
            const productPrice = (price - (price * salePercent / 100))
            return productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
        }
        const productPrice = price
        return productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
    }
    return (
        <div className='flex justify-between gap-6'>
            <div className='relative overflow-hidden min-w-20 h-20 rounded-lg'>
                <Image src={image} layout='fill' objectFit="cover" alt='cart' />
            </div>
            <div className='w-full text-start'>
                <div className="flex flex-col justify-between h-full">
                    <div>{name}</div>
                    <div className='text-sm'>{quantity} * {stringPriceOne()} <span className='font-semibold'>( {size.toUpperCase()} )</span></div>
                    <div className='font-bold'>{stringPrice()}</div>
                </div>
            </div>
        </div >
    )
}
