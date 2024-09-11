"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useAuth } from '../utils/authProvider';
interface ProfileProps {
    userName: string;
}
export const Profile = ({ userName }: ProfileProps) => {
    const router = useRouter()
    const { logout } = useAuth()
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div onClick={() => router.push("/user")} className='flex items-center gap-2 cursor-pointer group'>
                    <p className='group-hover:text-blue-600'>Hello! {userName}</p>
                    <Avatar className='border group-hover:border-blue-600'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-40 text-center mt-4 space-x-2">
                {/* <button onClick={() => router.push("/forget")} className='bg-blue-600 text-xs rounded-full px-4 py-2 text-white items-end'>Нууц үг шинэчлэх</button> */}
                <button onClick={() => { router.push("/"), logout() }} className='bg-red-600 text-xs rounded-full px-4 py-2 text-white items-end'>Гарах</button>
            </HoverCardContent>
        </HoverCard>
    )
}
