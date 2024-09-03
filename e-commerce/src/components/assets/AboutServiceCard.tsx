"use client"
import { PropsWithChildren } from "react";
type AboutServiceCardProps = {
    icon: string;
    description: string;
    name: string;
} & PropsWithChildren;
export const AboutServiceCard = ({ icon, description, name }: AboutServiceCardProps) => {
    return (
        <div className="w-72 h-80 flex flex-col items-center justify-between shadow-xl px-6 py-11">
            <div style={{
                backgroundImage: `url(${icon})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }} className="w-16 h-16 bg-red-300"></div>
            <div className="text-center space-y-4">
                <h3 className="text-textB text-lg font-extrabold">{name}</h3>
                <p className="text-[#1a0b5b70] px-4">{description}</p>
            </div>
        </div>
    )
}