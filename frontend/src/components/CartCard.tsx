import Image from 'next/image'
import React from 'react'
import { IoTrashOutline } from 'react-icons/io5';

interface CartCardProps {
    image: string,
    name: string,
    price: number,
    salePercent?: number,
    size: string,
    quantity: number,
}
export const CartCard = ({ image, name, price, salePercent, size, quantity }: CartCardProps) => {
    const stringPrice = () => {
        if (salePercent) {
            const productPrice = (price - (price * salePercent / 100)) * quantity
            return productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
        }
        const productPrice = price * quantity
        return productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
    }
    return (
        <div className='p-4 border rounded-xl flex justify-between bg-white gap-6'>
            <div className='relative overflow-hidden min-w-24 h-24 rounded-lg'>
                <Image src={image} layout='fill' objectFit="cover" alt='cart' />
            </div>
            <div className='w-full text-start'>
                <div className="flex flex-col justify-between h-full">
                    <div>{name} <span className='font-bold'>( {size.toUpperCase()} )</span> </div>
                    <div><button className='w-8 h-8 border border-black rounded-full'>-</button><span className='px-4'>{quantity}</span><button className='w-8 h-8 border border-black rounded-full'>+</button></div>
                    <div className='font-bold'>{stringPrice()}</div>
                </div>
            </div>
            <button className='h-fit p-1'>
                <IoTrashOutline className='text-2xl hover:text-red-500' />
            </button>
        </div >
    )
}
