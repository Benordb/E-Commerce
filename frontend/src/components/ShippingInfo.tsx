"use client"
import { FormikErrors, FormikTouched, useFormik } from 'formik'
import * as yup from "yup";
import React from 'react'
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Input } from './ui/input';
interface ShippingInfoProps {
    setStep: React.Dispatch<React.SetStateAction<number>>
}
interface ShippingInfoForm {
    firstName: string,
    lastName: string,
    phone: number,
    address: string,
    info?: string
}
export const ShippingInfo = ({ setStep }: ShippingInfoProps) => {
    const ShippingInfoForm = useFormik<ShippingInfoForm>({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: 0,
            address: "",
            info: "",
        },
        validationSchema: yup.object({
            firstName: yup.string().required("Овогоо оруулна уу"),
            lastName: yup.string().required("Нэрээ оруулна уу"),
            phone: yup.number().typeError("Төрлийн оруулна уу").required("Утасны дугаараа оруулна уу").min(1000000000, "Төрлийн оруулна уу").max(9999999999, "Төрлийн оруулна уу"),
            address: yup.string().required("Хаягаа оруулна уу"),
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    })
    const showError = (
        field: keyof ShippingInfoForm,
        errors: FormikErrors<ShippingInfoForm>,
        touched: FormikTouched<ShippingInfoForm>
    ) => ShippingInfoForm.submitCount > 0 && errors[field] && touched[field];
    return (
        <form className='bg-gray-50 min-w-[687px] p-8 rounded-2xl'>
            <div className="font-bold text-lg">2. Хүргэлтийн мэдээлэл оруулах</div>
            <Label htmlFor='firstName'>Овог:</Label>
            <Input
                id="firstName"
                name="firstName"
                placeholder='Please enter'
                onChange={ShippingInfoForm.handleChange}
                onBlur={ShippingInfoForm.handleBlur}
                value={ShippingInfoForm.values.firstName}
            />
            {showError("firstName", ShippingInfoForm.errors, ShippingInfoForm.touched) ? (
                <label className="text-sm text-red-600 px-3">
                    {ShippingInfoForm.errors.firstName}
                </label>
            ) : null}
            <Label htmlFor='lastName'>Нэр:</Label>
            <Input
                id="lastName"
                name="lastName"
                placeholder='Please enter'
                onChange={ShippingInfoForm.handleChange}
                onBlur={ShippingInfoForm.handleBlur}
                value={ShippingInfoForm.values.lastName}
            />
            {showError("lastName", ShippingInfoForm.errors, ShippingInfoForm.touched) ? (
                <label className="text-sm text-red-600 px-3">
                    {ShippingInfoForm.errors.lastName}
                </label>
            ) : null}
            <Label htmlFor='phone'>Утасны дугаар:</Label>
            <Input
                id="phone"
                name="phone"
                type='number'
                placeholder='Please enter'
                onChange={ShippingInfoForm.handleChange}
                onBlur={ShippingInfoForm.handleBlur}
                value={ShippingInfoForm.values.phone}
            />
            {showError("phone", ShippingInfoForm.errors, ShippingInfoForm.touched) ? (
                <label className="text-sm text-red-600 px-3">
                    {ShippingInfoForm.errors.phone}
                </label>
            ) : null}
            <Label htmlFor='address'>Хаяг:</Label>
            <Textarea
                id="address"
                name="address"
                placeholder='Please enter'
                onChange={ShippingInfoForm.handleChange}
                onBlur={ShippingInfoForm.handleBlur}
                value={ShippingInfoForm.values.address}
            />
            {showError("address", ShippingInfoForm.errors, ShippingInfoForm.touched) ? (
                <label className="text-sm text-red-600 px-3">
                    {ShippingInfoForm.errors.address}
                </label>
            ) : null}
            <Label htmlFor='info'>Нэмэлт мэдээлэл:</Label>
            <Textarea
                id="info"
                name="info"
                placeholder='Please enter'
                onChange={ShippingInfoForm.handleChange}
                onBlur={ShippingInfoForm.handleBlur}
                value={ShippingInfoForm.values.info}
            />
            {showError("info", ShippingInfoForm.errors, ShippingInfoForm.touched) && (
                <label className="text-sm text-red-600 px-3">
                    {ShippingInfoForm.errors.info}
                </label>
            )}

            <div className='flex justify-between'>
                <button onClick={() => setStep(1)} className="bg-white border px-9 py-2 rounded-full text-sm">Буцах</button>
                <button type='submit' onClick={() => setStep(3)} className="text-white bg-blue-600 px-9 py-2 rounded-full text-sm">Төлбөр төлөх</button>
            </div>
        </form>
    )
}