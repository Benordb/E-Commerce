"use client"
import React, { useEffect, useState } from 'react'
import { Container, ProductGridCard, ProductPieces, ProductSizesButton, ReviewCard, ReviewStars } from './assets'
import { PiHeartStraight, PiHeartStraightFill } from 'react-icons/pi';
import { Textarea } from './ui/textarea';
import { useParams } from 'next/navigation';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { api } from '@/lib/axios';
type productsData = {
    id: number,
    images: string[],
    price: number,
    title: string,
    description?: string,
    discount?: number,
    sizes?: {
        Free?: number,
        S?: number,
        M?: number,
        L?: number,
        XL?: number,
        "2XL"?: number,
        "3XL"?: number,
    };
    favorite?: number[],
    createdAt?: Date,

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
    description: "Зэрлэг цэцгийн зурагтай даавуун материалтай цамц",
    sizes: {
        Free: 0,
        S: 0,
        M: 0,
        L: 0,
        XL: 10,
        "2XL": undefined,
        "3XL": 10,
    },
    createdAt: new Date(),
    favorite: [1]
}
interface productType {
    _id: number,
    name: string,
    price: number,
    salePercent: number,
    description: string,
    images: string[],
}

export const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<productType>();
    const [products, setProducts] = useState<productType[]>([]);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await api.get(`/product/${id}`)
                setProduct(response.data.product)
            } catch (err: unknown) {
                console.log(err);
                if (err instanceof AxiosError) {
                    toast.error(err.response?.data?.message || "Login failed.");
                } else {
                    toast.error("An unknown error occurred.");
                }
            }
        }
        getProduct()
    }, [])
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
    const [chooseImage, setChooseImage] = useState(0)
    const [chooseSize, setChooseSize] = useState<string>('')
    const [pieces, setPieces] = useState<number>(1)
    const [showReview, setShowReview] = useState<boolean>(false)
    const chooseSizePieces: number = oneProduct.sizes?.[chooseSize as keyof typeof oneProduct.sizes] || 0;
    const stringPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
    }
    return (
        <Container>
            <div className='space-y-20'>
                <div className='flex gap-5 items-start'>
                    <div className='flex justify-between items-center flex-1'>
                        <div className='space-y-2'>
                            {product?.images.map((image, index) => index < 6 ? <div onClick={() => setChooseImage(index)} key={index} style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }} className={`h-16 w-16 rounded-sm cursor-pointer ${chooseImage === index ? "border border-black" : null}`}></div> : null)}

                        </div>
                        <div style={{
                            backgroundImage: `url(${product?.images[chooseImage]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }} className="h-[521px] w-[422px] rounded-2xl cursor-move"></div>
                        {/* <Image className='rounded-2xl' src='/imageW.png' width={422} height={521} alt="" /> */}
                    </div>
                    <div className='flex-1'>
                        <div className='h-[521px] space-y-6 flex flex-col justify-center relative'>
                            <div className='space-y-4'>
                                <div className='space-y-2'>
                                    <div className='border border-blue-500 text-xs font-semibold py-[2px] px-[10px] w-fit rounded-full'>шинэ</div>
                                    <div className='flex items-center gap-4'>
                                        <p className='font-bold text-2xl'>{product?.name}</p>
                                        {oneProduct.favorite?.includes(oneProduct.id) ? <PiHeartStraightFill className='w-6 h-6 top-4 right-4 text-black' /> : <PiHeartStraight className='w-6 h-6 top-4 right-4 text-black' />}
                                    </div>
                                    <p>{product?.description}</p>
                                </div>
                                <ProductSizesButton sizes={oneProduct.sizes} chooseSize={chooseSize} setChooseSize={setChooseSize} />
                                <ProductPieces chooseSizePieces={chooseSizePieces} pieces={pieces} setPieces={setPieces} />
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-bold'>{stringPrice(product?.price || 0)}</p>
                                <button className='px-9 py-2 bg-blue-600 text-white rounded-3xl'>Сагсанд нэмэх</button>
                            </div>
                            <div className='absolute bottom-0 left-0 text-sm space-y-1'>
                                <div className='flex gap-4'>
                                    <p>Үнэлгээ</p>
                                    <button onClick={() => setShowReview(!showReview)} className='text-blue-600 underline underline-offset-4'>бүгдийг {showReview ? 'хураах' : 'харах'}</button>
                                </div>
                                <div className='flex items-center'>
                                    <ReviewStars percent={4.6} size={24} />
                                    <p className='font-bold'>4.6</p>
                                    <p className='text-gray-500'>(24)</p>
                                </div>
                            </div>
                        </div>
                        <div className={` w-full ${!showReview ? 'hidden' : null}`}>
                            <div className='bg-gray-100 p-6 rounded-lg text-sm space-y-6 mt-6'>
                                <div className='space-y-2'>
                                    <p>Одоор үнэлэх:</p>
                                    <ReviewStars percent={5} size={24} />
                                </div>
                                <div className='space-y-2'>
                                    <p>Сэтгэгдэл үлдээх:</p>
                                    <Textarea className='bg-white h-24' placeholder='Энд бичнэ үү' />
                                </div>
                                <button className='px-9 py-2 bg-blue-600 rounded-full text-white'>Үнэлэх</button>
                            </div>
                            <div className='space-y-5 divide-y divide-dashed'>
                                <ReviewCard comment={"sainuu nzuuda 😆"} star={4} userName={"Saraa"} />
                                <ReviewCard comment={"sainuu nzuudanvcsducds cdisu vgfdfjb fdgfbdhvjsvchds dscbsicvhdsc  cshudcvhuudskvcugvd"} star={3.9} userName={"Saraa"} />
                                <ReviewCard comment={"sainuu nzuudanvcsducds cdisu vgfdfjb fdgfbdhvjsvchds dscbsicvhdsc  cshudcvhuudskvcugvd"} star={4} userName={"Saraa"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-3xl font-bold mb-6'>Холбоотой бараа</p>
                    <div className='grid grid-cols-4 gap-5'>
                        {products.map((product, index) => index <= 7 ? (<ProductGridCard key={index} id={product._id} title={product.name} price={product.price} images={product.images} discount={product.salePercent} />) : null)}
                    </div>
                </div>
            </div>
        </Container>
    )
}
