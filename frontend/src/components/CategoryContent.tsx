"use client"
import React, { useEffect, useState } from 'react'
import { Container, ProductGridCard } from './assets'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
const categoriesData = [
    "Малгай",
    "Усны сав",
    "T-shirt",
    "Hoodie",
    "Tee",
    "Цүнх"
]
const sizesData = [
    "Free",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL",
]
interface productType {
    _id: number,
    name: string,
    price: number,
    salePercent: number,
    description: string,
    images: string[],
}

export const CategoryContent = () => {
    const [products, setProducts] = useState<productType[]>([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await api.get('/product')
                setProducts(response.data.products)
            } catch (err: unknown) {
                console.log(err);
                if (err instanceof AxiosError) {
                    toast.error(err.response?.data?.message || "Login failed.");
                } else {
                    toast.error("An unknown error occurred.");
                }
            }
        }
        getProducts()
    }, [])
    return (
        <Container>
            <div className='grid grid-cols-4'>
                <div className='space-y-12'>
                    <div className='space-y-4'>
                        <p className='font-bold'>Ангилал</p>
                        <ul className='text-sm space-y-2'>
                            {categoriesData.map((category, index) => (<li key={index}>{category}</li>))}
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <p className='font-bold'>Хэмжээ</p>
                        <ul className='text-sm space-y-2'>
                            {sizesData.map((size, index) => (<li key={index}>{size}</li>))}
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-3 col-span-3 gap-5'>
                    {products.map((product, index) => (<ProductGridCard key={index} id={product._id} title={product.name} price={product.price} images={product.images} discount={product.salePercent} />))}
                </div>
            </div>
        </Container>
    )
}
