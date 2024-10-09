"use client"
import { BuySteps, CartCard, CartCardDisable, ShippingInfo } from "@/components";
import { useState } from "react";
interface productType {
    _id: string,
    name: string,
    price: number,
    salePercent: number,
    size: string,
    quantity: number,
    images: string[],
}
const defaultProductData: productType[] = [
    {
        _id: "1",
        name: "Хувийн тувгалдаг оронтой",
        price: 15000,
        salePercent: 0,
        size: "m",
        quantity: 1,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611140/imageHat_qiq2za.png"],
    },
    {
        _id: "2",
        name: "Хувийн тувгалдаг оронтой",
        price: 85000,
        salePercent: 10,
        size: "l",
        quantity: 5,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611140/imageHat_qiq2za.png"],
    }
]
export default function Buy() {
    const [step, setStep] = useState<number>(1)
    const stringPrice = () => {
        const sum = defaultProductData.reduce((accumulator, currentValue) => {
            let productPrice = currentValue.price * currentValue.quantity;
            if (currentValue.salePercent) {
                productPrice = (currentValue.price - (currentValue.price * currentValue.salePercent / 100)) * currentValue.quantity;
            }
            return accumulator + productPrice;
        }, 0)
        return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
    }
    return (
        <div className="space-y-12">
            <BuySteps step={step} />
            {
                step === 1 && <div className="border max-w-[638px] m-auto bg-gray-50 rounded-2xl p-8 space-y-4">
                    <div className="font-bold text-xl">1. Сагс <span className="text-gray-400 font-normal">({defaultProductData.length})</span></div>
                    {
                        defaultProductData.map(product => <CartCard key={product._id} image={product.images[0]} name={product.name} price={product.price} salePercent={product.salePercent} quantity={product.quantity} size={product.size} />)
                    }
                    <div className="flex justify-between"><p>Нийт төлөх дүн:</p><p className="font-bold text-xl">{stringPrice()}</p></div>
                    <div className="text-end pt-12">
                        <button onClick={() => setStep(2)} className="text-white bg-blue-600 px-9 py-2 rounded-full text-sm">Худалдан авах</button>
                    </div>
                </div>
            }
            {
                step === 2 && <div className="flex gap-5 m-auto w-fit">
                    <div className="bg-gray-50 min-w-[333px] rounded-2xl py-8 px-6 space-y-4">
                        <div className="font-bold text-lg">Сагс <span className="text-gray-400 font-normal">({defaultProductData.length})</span></div>
                        {
                            defaultProductData.map(product => <CartCardDisable key={product._id} image={product.images[0]} name={product.name} price={product.price} salePercent={product.salePercent} quantity={product.quantity} size={product.size} />)
                        }
                        <div className="border-t border-dashed"></div>
                        <div className="flex justify-between"><p>Нийт төлөх дүн:</p><p className="font-bold text-lg">{stringPrice()}</p></div>
                    </div>
                    <ShippingInfo setStep={setStep} />
                </div>
            }
        </div>
    )
}