import { AboutServiceCard, Container } from "./assets"
export interface Services {
    name: string;
    icon: string;
    description: string;
}
const ServicesData: Services[] = [
    {
        name: 'Үнэгүй хүргэлт',
        icon: 'https://res.cloudinary.com/dqhguhv7o/image/upload/v1725345246/free-delivery_1_ucnrmk.png',
        description: 'Бүрэн үнэгүй хүргэлт болон дээрхийн хүргэлтээр хэрэгжүлэх.'
    },
    {
        name: 'Буцаан олголт',
        icon: 'https://res.cloudinary.com/dqhguhv7o/image/upload/v1725345246/cashback_1_hq8uhf.png',
        description: 'Буцаан олголтын хэрэгсэл болон дээрхийн хэрэгсэлээр олголтох.'
    },
    {
        name: 'Найдвартай',
        icon: 'https://res.cloudinary.com/dqhguhv7o/image/upload/v1725345247/premium-quality_1_gonsjv.png',
        description: 'Онцгой хүргэлт болон дээрхийн хүргэлтээр хэрэгжүлэх.'
    },
    {
        name: '24/7 тусламж',
        icon: 'https://res.cloudinary.com/dqhguhv7o/image/upload/v1725345246/24-hours-support_1_g77mg7.png',
        description: '24/7 тусламж болон дээрхийн хэрэгсэлээр тусламж хийх.'
    }
]
export const AboutService = () => {
    return (
        <Container background="bg-white">
            <h1 className="text-center font-extrabold text-textB text-3xl mt-20">Үйлчилгээний тухай</h1>
            <div className="flex justify-between my-16">
                {
                    ServicesData.map(service => (
                        <AboutServiceCard key={service.name} icon={service.icon} name={service.name} description={service.description} />
                    ))
                }
            </div>
        </Container>
    )
}