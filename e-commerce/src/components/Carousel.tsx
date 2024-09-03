"use client"
import { useEffect, useState } from "react";
import { Container } from "./assets"
import { useData } from "./utils/dataProvider";

export const Carousel = () => {
    const [percent, setPercent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const { carousel } = useData()
    useEffect(() => {
        const interval = setInterval(() => {
            percent === 3 ? setIsTransitioning(false) : setIsTransitioning(true);
            setPercent((prev) => (prev + 1) % 4);
        }, 5000);
        return () => clearInterval(interval);
    });
    return (
        <Container background=" bg-[#F2F0FF]">
            <div className="h-96 xl:h-[36rem] mx-4 xl:mx-0 rounded-2xl xl:rounded-none bg-white relative overflow-hidden">
                <div
                    style={{ transform: `translateX(-${(percent * 100) / 4}%)` }}
                    className={`absolute bg-red-200 w-[400%] flex h-full ${isTransitioning ? "duration-1000" : null
                        }`}
                >
                    <div
                        style={{ backgroundImage: `url(https://res.cloudinary.com/dqhguhv7o/image/upload/v1723171049/cld-sample-2.jpg)` }}
                        className="w-1/4 bg-[#F2F0FF] h-full bg-cover bg-center relative"
                    ></div>
                    <div
                        style={{ backgroundImage: `url(https://res.cloudinary.com/dqhguhv7o/image/upload/v1723171049/cld-sample.jpg)` }}
                        className="w-1/4 bg-green-200 h-full bg-cover bg-center relative"
                    ></div>
                    <div
                        style={{ backgroundImage: `url(https://res.cloudinary.com/dqhguhv7o/image/upload/v1723171048/samples/coffee.jpg)` }}
                        className="w-1/4 bg-red-200 h-full bg-cover bg-center relative"
                    ></div>
                    <div
                        style={{ backgroundImage: `url(https://res.cloudinary.com/dqhguhv7o/image/upload/v1723171049/cld-sample-2.jpg)` }}
                        className="w-1/4 bg-blue-200 h-full bg-cover bg-center relative"
                    ></div>
                </div>
            </div>
        </Container>
    )
}