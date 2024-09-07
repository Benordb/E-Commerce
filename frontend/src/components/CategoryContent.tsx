import React from 'react'
import { Container, ProductGridCard } from './assets'
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
type productsData = {
    id: number,
    image: string[],
    price: number,
    title: string,
    discount?: number,
    favorite?: number[]

}
const productsData: productsData[] = [
    {
        id: 1,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611124/image_jjtqmb.png"],
        price: 29000,
        title: "The Prompt Magazine",
        discount: 30,
        favorite: [1]
    },
    {
        id: 2,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611126/imaged_l9fnb6.png"],
        price: 29000,
        title: "Chunky Glyph Tee"
    },
    {
        id: 3,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611131/imageB_q5obn4.png"],
        price: 29000,
        title: "All Smiles Nalgene"
    },
    {
        id: 4,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611131/imageW_nqctgr.png"],
        price: 29000,
        title: "Wildflower Hoodie",
        discount: 10,
    },
    {
        id: 5,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611130/imageOrange_vq75ik.png"],
        price: 29000,
        title: "Inkblot Tee"
    },
    {
        id: 6,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611133/imageZiink_t6jpp5.png"],
        price: 29000,
        title: "Gestures Longsleeve"
    },
    {
        id: 7,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611140/imageHat_qiq2za.png"],
        price: 29000,
        title: "Chunky Glyph Cap"
    },
    {
        id: 8,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611169/imagePath_t76jzn.png"],
        price: 29000,
        title: "Local Styles Crewneck"
    },
    {
        id: 9,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611140/imageHat_qiq2za.png"],
        price: 29000,
        title: "Chunky Glyph Cap"
    },
    {
        id: 10,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611130/imageBlack_wui8ww.png"],
        price: 29000,
        title: "Doodle Hoodie"
    },
    {
        id: 11,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611126/imaged_l9fnb6.png"],
        price: 29000,
        title: "Chunky Glyph Tee"
    },
    {
        id: 12,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611131/imageB_q5obn4.png"],
        price: 29000,
        title: "All Smiles Nalgene"
    },
    {
        id: 13,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611124/image_jjtqmb.png"],
        price: 29000,
        title: "The Prompt Magazine"
    },
    {
        id: 14,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611129/imageGreen_nfxitw.png"],
        price: 29000,
        title: "Independent Corners Tee"
    },
    {
        id: 15,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611129/imageGreen_nfxitw.png"],
        price: 29000,
        title: "Independent Corners Tee"
    },
    {
        id: 16,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611124/image_jjtqmb.png"],
        price: 29000,
        title: "The Prompt Magazine"
    },
    {
        id: 17,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611126/imaged_l9fnb6.png"],
        price: 29000,
        title: "Chunky Glyph Tee"
    },
    {
        id: 18,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611131/imageB_q5obn4.png"],
        price: 0,
        title: "All Smiles Nalgene"
    }
]
export const CategoryContent = () => {
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
                    {productsData.map((product, index) => (<ProductGridCard key={index} id={product.id} title={product.title} price={product.price} images={product.image} discount={product.discount} favorite={product.favorite} />))}
                </div>
            </div>
        </Container>
    )
}
