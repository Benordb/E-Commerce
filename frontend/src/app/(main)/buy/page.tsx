"use client"
import { BuySteps, CartCard, CartCardDisable, Payment, ShippingInfo } from "@/components";
import { useData } from "@/components/utils/dataProvider";
import { useEffect, useMemo, useState } from "react";
export default function Buy() {
    const [step, setStep] = useState<number>(3)
    const [prices, setPrices] = useState<number[]>([]);
    const totalPrice = useMemo(() => {
        return prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }, [prices]);
    useEffect(() => {
        setPrices(prev => [...prev, 0])
    }, []);
    const { cartProduct } = useData()
    const stringPrice = () => {
        return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
    }
    return (
        <div className="space-y-12">
            <BuySteps step={step} />
            {
                step === 1 && <div className="border max-w-[638px] m-auto bg-gray-50 rounded-2xl p-8 space-y-4">
                    <div className="font-bold text-xl">1. Сагс <span className="text-gray-400 font-normal">({cartProduct.length})</span></div>
                    {
                        cartProduct.map((product, i) => <CartCard key={i} id={product.product} quantity={product.quantity} size={product.size} />)
                    }
                    <div className="flex justify-between"><p>Нийт төлөх дүн:</p><p className="font-bold text-xl">{stringPrice()}</p></div>
                    <div className="text-end pt-12">
                        <button onClick={() => setStep(2)} className="text-white bg-blue-600 px-9 py-2 rounded-full text-sm">Худалдан авах</button>
                    </div>
                </div>
            }
            {
                step === 2 && <div className="flex gap-5 m-auto w-fit">
                    <div className="bg-gray-50 border min-w-[333px] rounded-2xl py-8 px-6 space-y-4">
                        <div className="font-bold text-lg">Сагс <span className="text-gray-400 font-normal">({cartProduct.length})</span></div>
                        {
                            cartProduct.map((product, i) => <CartCardDisable key={i} id={product.product} quantity={product.quantity} size={product.size} />)
                        }
                        <div className="border-t border-dashed"></div>
                        <div className="flex justify-between"><p>Нийт төлөх дүн:</p><p className="font-bold text-lg">{stringPrice()}</p></div>
                    </div>
                    <ShippingInfo setStep={setStep} totalPrice={totalPrice} />
                </div>
            }
            {
                step === 3 && <div className="w-[687px] m-auto bg-gray-50 rounded-2xl p-8 border space-y-4">
                    <div className="font-bold text-xl">3. Төлбөр төлөлт</div>
                    <Payment />
                    <button type='button' onClick={() => setStep(2)} className="bg-white border px-9 py-2 rounded-full text-sm">Буцах</button>
                </div>
            }
        </div>
    )
}