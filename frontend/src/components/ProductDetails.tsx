"use client"
import React, { useState } from 'react'
import { Container, ProductGridCard } from './assets'
type productsData = {
    id: number,
    images: string[],
    price: number,
    title: string,
    discount?: number,
    favorite?: number[]

}
const oneProduct: productsData = {
    id: 1,
    images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611140/imageHat_qiq2za.png",
        "https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611124/image12_eph1os.png",
        "https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611130/imageBlack_wui8ww.png",
        "https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611133/image14_uwhdov.png"],
    price: 29000,
    title: "The Prompt Magazine",
    discount: 30,
    favorite: [1]
}
const productsData: productsData[] = [
    {
        id: 1,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611124/image_jjtqmb.png"],
        price: 29000,
        title: "The Prompt Magazine",
        discount: 30,
        favorite: [1]
    },
    {
        id: 2,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611126/imaged_l9fnb6.png"],
        price: 29000,
        title: "Chunky Glyph Tee"
    },
    {
        id: 3,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611131/imageB_q5obn4.png"],
        price: 29000,
        title: "All Smiles Nalgene"
    },
    {
        id: 4,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611131/imageW_nqctgr.png"],
        price: 29000,
        title: "Wildflower Hoodie",
        discount: 10,
    },
    {
        id: 5,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611130/imageOrange_vq75ik.png"],
        price: 29000,
        title: "Inkblot Tee"
    },
    {
        id: 6,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611133/imageZiink_t6jpp5.png"],
        price: 29000,
        title: "Gestures Longsleeve"
    },
    {
        id: 7,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611140/imageHat_qiq2za.png"],
        price: 29000,
        title: "Chunky Glyph Cap"
    },
    {
        id: 8,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611169/imagePath_t76jzn.png"],
        price: 29000,
        title: "Local Styles Crewneck"
    },
    {
        id: 9,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611140/imageHat_qiq2za.png"],
        price: 29000,
        title: "Chunky Glyph Cap"
    },
    {
        id: 10,
        images: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611130/imageBlack_wui8ww.png"],
        price: 29000,
        title: "Doodle Hoodie"
    }
]
export const ProductDetails = () => {
    const [chooseImage, setChooseImage] = useState(0)
    return (
        <Container>
            <div className='space-y-20'>
                <div className='flex gap-5 items-start'>
                    <div className='flex justify-between items-center flex-1'>
                        <div className='space-y-2'>
                            {oneProduct.images.map((image, index) => index < 6 ? <div onClick={() => setChooseImage(index)} key={index} style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }} className={`h-16 w-16 rounded-sm cursor-pointer ${chooseImage === index ? "border border-black" : null}`}></div> : null)}

                        </div>
                        <div style={{
                            backgroundImage: `url(${oneProduct.images[chooseImage]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }} className="h-[521px] w-[422px] rounded-2xl cursor-move"></div>
                        {/* <Image className='rounded-2xl' src='/imageW.png' width={422} height={521} alt="" /> */}
                    </div>
                    <div className='flex-1'>
                        <div className='h-[521px]'>{oneProduct.title}</div>
                        <div className='bg-red-200 w-full'>Review</div>
                    </div>
                </div>
                <div>
                    <p className='text-3xl font-bold mb-6'>Холбоотой бараа</p>
                    <div className='grid grid-cols-4 gap-5'>
                        {productsData.map((product, index) => index <= 7 ? (<ProductGridCard key={index} id={product.id} title={product.title} price={product.price} images={product.images} discount={product.discount} favorite={product.favorite} />) : null)}
                    </div>
                </div>
            </div>
        </Container>
    )
}
