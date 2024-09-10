"use client"
import { ForgotPassword } from "@/components/ForgotPassword";
import { OTP } from "@/components/OTP";
import { useState } from "react";


export default function Forget() {
    const [next, setNext] = useState(false)
    return (
        <div className="h-96">
            {next ? <OTP /> : <ForgotPassword setNext={setNext} />}
        </div>
    );
}
