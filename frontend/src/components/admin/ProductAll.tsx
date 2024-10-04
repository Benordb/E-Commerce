"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { FaPlus } from 'react-icons/fa'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { FaCalendar, FaDollarSign } from "react-icons/fa";
import { MdOutlineCategory, MdOutlineCalendarToday, MdOutlineEdit } from "react-icons/md";
import { IoSearchOutline, IoTrashOutline } from 'react-icons/io5';
import { Input } from '../ui/input';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table';
import { Checkbox } from '../ui/checkbox';
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import { format } from 'date-fns'
import Image from 'next/image'
interface categoryType {
    _id: string,
    name: string
}
interface productType {
    _id: string,
    name: string,
    price: number,
    salePercent: number,
    description: string,
    images: string[],
    createdAt: string;
    qty?: {
        free?: number;
        s?: number;
        m?: number;
        l?: number;
        xl?: number;
        "2xl"?: number;
        "3xl"?: number;
    },
    category?: categoryType[]
}

export const ProductAll = () => {
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
    const stringPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
    }
    const totalQty = (qty?: {
        free?: number;
        s?: number;
        m?: number;
        l?: number;
        xl?: number;
        "2xl"?: number;
        "3xl"?: number;
    }) => {
        if (!qty) return 0;
        return (qty.free ?? 0) +
            (qty.s ?? 0) +
            (qty.m ?? 0) +
            (qty.l ?? 0) +
            (qty.xl ?? 0) +
            (qty["2xl"] ?? 0) +
            (qty["3xl"] ?? 0);
    }
    const showCategories = (product: productType) => {
        if (product.category) {
            let categoryName = product.category.map(category => category.name).join(", ")
            return categoryName
        }
        return product._id
    }
    // console.log(products[0].name)
    return (
        <div className='p-6 h-5/6'>
            <Button><FaPlus className='mr-2' />Бүтээгдэхүүн нэмэх</Button>
            <div className='flex justify-between mt-6 mb-4'>
                <div className='flex gap-3'>
                    <Select>
                        <SelectTrigger className="bg-white w-40"><MdOutlineCategory className='w-5 h-5' />Ангилал
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="bg-white w-28"><FaDollarSign />Үнэ
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="bg-white w-36"><MdOutlineCalendarToday />Сараар
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='relative'>
                    <IoSearchOutline className='absolute w-6 h-6 top-[6px] left-2' />
                    <Input className='w-96 px-10 bg-white border-none' placeholder='Бүтээгдэхүүний нэр, SKU, UPC' />
                </div>
            </div>
            <div className='h-5/6 rounded-xl bg-white overflow-y-scroll'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead></TableHead>
                            <TableHead>Бүтээгдэхүүн</TableHead>
                            <TableHead>Ангилал</TableHead>
                            <TableHead>Үнэ</TableHead>
                            <TableHead>Үлдэгдэл</TableHead>
                            <TableHead>Зарагдсан</TableHead>
                            <TableHead> Нэмсэн огноо</TableHead>
                            <TableHead className='w-24'></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product._id}>
                                <TableCell className='text-center'><Checkbox id="terms" /></TableCell>
                                <TableCell className="flex items-center gap-2">
                                    <Image
                                        src={product.images[0]}
                                        width={40}
                                        height={40}
                                        className='rounded-full'
                                        alt="Picture of the author"
                                    />
                                    <p>{product.name}</p>
                                </TableCell>
                                <TableCell>{showCategories(product)}</TableCell>
                                <TableCell>{stringPrice(product.price)}</TableCell>
                                <TableCell>{totalQty(product.qty)}</TableCell>
                                <TableCell>0</TableCell>
                                <TableCell>{format(product.createdAt, "yyyy-MM-dd")}</TableCell>
                                <TableCell className='flex justify-center items-center h-full gap-4'><IoTrashOutline className='hover:text-red-500 w-5 h-5 text-gray-400' /><MdOutlineEdit className='hover:text-blue-500 w-5 h-5 text-gray-400' /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
