import { AddedProductsCard, Container } from './assets'
type productsData = {
    id: number;
    name: string;
    title: string;
    price: number;
    colors: string[];
    images: string[];
}
const productsData: productsData[] = [
    {
        id: 1,
        name: 'Canon EOS 1500D',
        title: 'Canon камер',
        price: 750000,
        colors: ['#000000', '#A6A6A6'],
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1725350095/cam_3_szx5lr.png']
    },
    {
        id: 2,
        name: 'Purple Cushion Chair',
        title: 'Усан ягаан сандал',
        price: 120000,
        colors: ['#E1BEE7', '#C5CAE9'],
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1725350096/image_1165_m3z5xz.png']
    },
    {
        id: 3,
        name: 'Gray Office Chair',
        title: 'Саарал сандал',
        price: 150000,
        colors: ['#B0BEC5', '#CFD8DC'],
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1725350096/image_1173_oiyj57.png']
    },
    {
        id: 4,
        name: 'Laptop Bag',
        title: 'Laptop цүнх',
        price: 80000,
        colors: ['#616161', '#424242'],
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1725350094/10011_1_sw5va0.png']
    },
    {
        id: 5,
        name: 'Smartphone',
        title: 'Ухаалаг утас',
        price: 999000,
        colors: ['#FF5722', '#FF7043'],
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1725350094/10011_1_sw5va0.png']
    },
    {
        id: 6,
        name: 'Men\'s Smartphone',
        title: 'Эрэгтэй ухаалаг утас',
        price: 1050000,
        colors: ['#3E2723', '#4E342E'],
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1725350094/1562173100-movado-connect-1562173094_2_zcj4f5.png']
    },
    {
        id: 7,
        name: 'Beats Headphones',
        title: 'Beats чихэвч',
        price: 450000,
        colors: ['#212121', '#757575'],
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1723171040/samples/ecommerce/shoes.png']
    },
    {
        id: 8,
        name: 'Soft Cushion Chair',
        title: 'Зөөлөвчэй ягаан сандал',
        price: 135000,
        colors: ['#F48FB1', '#F06292'],
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1725350095/image_1164_bqddec.png']
    }
];

export const AddedProducts = () => {
    return (
        <Container background="bg-white">
            <h1 className="text-center font-extrabold text-textB text-3xl mt-20 mb-14">Шинээр нэмэгдсэн</h1>
            <div className='grid grid-cols-4 gap-16'>
                {
                    productsData.map(product => (
                        <AddedProductsCard key={product.id} title={product.title} price={product.price} colors={product.colors} images={product.images} />
                    ))
                }
            </div>
        </Container>
    )
}
