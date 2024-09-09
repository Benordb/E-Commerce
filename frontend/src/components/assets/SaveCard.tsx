import React from 'react'
import { PiHeartStraightFill } from 'react-icons/pi'

export const SaveCard = () => {
    return (
        <div className='flex w-full gap-6'>
            <div style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611140/imageHat_qiq2za.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} className='w-[120px] h-[120px] rounded-2xl'></div>
            <div className='w-80 space-y-2'>
                <div className='space-y-1'>
                    <h1>Chunky Glyph Tee</h1>
                    <p className='font-bold text-sm'>120’000₮</p>
                </div>
                <button className='bg-blue-600 px-3 py-1 text-white rounded-full text-sm'>Сагслах</button>
            </div>
            <button className='w-10 h-10 flex justify-center items-center'>
                <PiHeartStraightFill className='w-6 h-6' />
            </button>
        </div>
    )
}
