"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useFormik, FormikErrors, FormikTouched } from "formik";
import * as yup from "yup";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    re_password: string;
}

export default function Register() {
    const router = useRouter()
    const [passwordChecks, setPasswordChecks] = useState({
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
        hasSpecialChar: false,
    });

    const validatePassword = (password: string) => {
        setPasswordChecks({
            hasUppercase: /[A-Z]/.test(password),
            hasLowercase: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecialChar: /[@$!%*?&#,.]/.test(password),
        });
    };
    const loginForm = useFormik<RegisterFormValues>({
        initialValues: {
            name: "",
            email: "",
            password: "",
            re_password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Нэрээ оруулна уу"),
            email: yup
                .string()
                .email("Зөв имэйл хаяг оруулна уу")
                .required("Имэйл хаягаа оруулна уу"),
            password: yup
                .string()
                .min(6, "Password must be at least 6 characters")
                .matches(/[A-Z]/, "Том үсэг оруулна уу")
                .matches(/[a-z]/, "Жижиг үсэг оруулна уу")
                .matches(/[0-9]/, "Тоо оруулна уу")
                .matches(/[@$!%*?&#]/, "Тусгай тэмдэгт оруулна уу")
                .required("Нууц үгээ оруулна уу"),
            re_password: yup
                .string()
                .oneOf([yup.ref("password"), undefined], "Нууц үг ижил биш байна")
                .required("Нууц үгээ давтан оруулна уу"),
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    });
    const showError = (
        field: keyof RegisterFormValues,
        errors: FormikErrors<RegisterFormValues>,
        touched: FormikTouched<RegisterFormValues>
    ) => loginForm.submitCount > 0 && errors[field] && touched[field];
    return (
        <form onSubmit={loginForm.handleSubmit} className="w-[334px] m-auto space-y-10">
            <h1 className="font-semibold text-2xl text-center">Бүртгүүлэх</h1>
            <div className="space-y-4 text-sm">
                <Input placeholder="Нэр"
                    id="name"
                    name="name"
                    type="text"
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.name} />
                {showError("name", loginForm.errors, loginForm.touched) ? (
                    <label className="text-red-600 px-3">
                        {loginForm.errors.name}
                    </label>
                ) : null}
                <Input placeholder="Имэйл хаяг"
                    id="email"
                    name="email"
                    type="email"
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.email} />
                {showError("email", loginForm.errors, loginForm.touched) ? (
                    <label className="text-red-600 px-3">
                        {loginForm.errors.email}
                    </label>
                ) : null}
                <Input placeholder="Нууц үг"
                    id="password"
                    name="password"
                    type="password"
                    onChange={(e) => { loginForm.handleChange(e), validatePassword(e.target.value) }}
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.password} />
                {showError("password", loginForm.errors, loginForm.touched) ? (
                    <label className="text-red-600 px-3">
                        {loginForm.errors.password}
                    </label>
                ) : null}
                <Input placeholder="Нууц үг давтах "
                    id="re_password"
                    name="re_password"
                    type="password"
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.re_password} />
                {showError("re_password", loginForm.errors, loginForm.touched) ? (
                    <label className="text-red-600 px-3">
                        {loginForm.errors.re_password}
                    </label>
                ) : null}
                <ul className="text-start list-disc list-inside mx-2 text-gray-500 space-y-1 text-xs">
                    <li className={!passwordChecks.hasUppercase ? 'text-red-600' : ''}>Том үсэг орсон байх</li>
                    <li className={!passwordChecks.hasLowercase ? 'text-red-600' : ''}>Жижиг үсэг орсон байх</li>
                    <li className={!passwordChecks.hasNumber ? 'text-red-600' : ''}>Тоо орсон байх</li>
                    <li className={!passwordChecks.hasSpecialChar ? 'text-red-600' : ''}>Тэмдэгт орсон байх</li>
                </ul>
                <Button type="submit" className="w-full rounded-full bg-blue-600">Үүсгэх</Button>
                <Button type="reset" onClick={() => router.push("/login")} className="w-full border border-blue-600 rounded-full bg-white text-blue-600  hover:text-white">Нэвтрэх</Button>
            </div>
        </form >
    )
}