import { api } from '@/lib/axios';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

export const UploadImage = () => {
    const [loading, setLoading] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string[]>([]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        if (files) handleUpload(files[0])
    }
    const handleUpload = async (file: File) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('image', file);
        try {
            const res = await api.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadedImageUrl(prevImages => [...prevImages, res.data.secure_url as string]);
        } catch (error) {
            console.error('Upload failed:', error);
        } finally {
            setLoading(false);
        }
    }
    const handleRemoveImage = (imageURL: string) => {
        setUploadedImageUrl(prevImages => prevImages.filter(img => img !== imageURL));
    }
    return (
        <div className='flex gap-2'>
            {
                uploadedImageUrl[0] ? <div className="relative w-32 h-32 rounded-lg overflow-hidden group"><Image
                    src={uploadedImageUrl[0]}
                    layout="fill"
                    objectFit="cover"
                    alt='Uploaded'
                />
                    <button
                        type="button"
                        className="absolute top-1 right-1 bg-gray-800 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleRemoveImage(uploadedImageUrl[0])}
                    >
                        <MdOutlineClose />
                    </button>
                </div> : <label className="flex items-center justify-center w-32 h-32 border border-dashed rounded-lg ">{loading ? <div className='h-5 w-5 border-2 rounded-full border-b-black animate-spin'></div> : <CiImageOn className='text-2xl' />}</label>
            }
            {
                uploadedImageUrl[1] ? <div className="relative w-32 h-32 rounded-lg overflow-hidden group"><Image
                    src={uploadedImageUrl[1]}
                    layout="fill"
                    objectFit="cover"
                    alt='Uploaded'
                />
                    <button
                        type="button"
                        className="absolute top-1 right-1 bg-gray-800 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleRemoveImage(uploadedImageUrl[1])}
                    >
                        <MdOutlineClose />
                    </button>
                </div> : <label className="flex items-center justify-center w-32 h-32 border border-dashed rounded-lg ">{loading && uploadedImageUrl.length === 1 ? <div className='h-5 w-5 border-2 rounded-full border-b-black animate-spin'></div> : <CiImageOn className='text-2xl' />}</label>
            }
            {
                uploadedImageUrl[2] ? <div className="relative w-32 h-32 rounded-lg overflow-hidden group"><Image
                    src={uploadedImageUrl[2]}
                    layout="fill"
                    objectFit="cover"
                    alt='Uploaded'
                />
                    <button
                        type="button"
                        className="absolute top-1 right-1 bg-gray-800 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleRemoveImage(uploadedImageUrl[2])}
                    >
                        <MdOutlineClose />
                    </button>
                </div> : <label className="flex items-center justify-center w-32 h-32 border border-dashed rounded-lg ">{loading && uploadedImageUrl.length === 2 ? <div className='h-5 w-5 border-2 rounded-full border-b-black animate-spin'></div> : <CiImageOn className='text-2xl' />}</label>
            }
            {
                uploadedImageUrl[3] ? <div className="relative w-32 h-32 rounded-lg overflow-hidden group"><Image
                    src={uploadedImageUrl[3]}
                    layout="fill"
                    objectFit="cover"
                    alt='Uploaded'
                />
                    <button
                        type="button"
                        className="absolute top-1 right-1 bg-gray-800 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleRemoveImage(uploadedImageUrl[3])}
                    >
                        <MdOutlineClose />
                    </button>
                </div> : <label className="flex items-center justify-center w-32 h-32 border rounded-lg cursor-pointer">
                    {loading && uploadedImageUrl.length === 3 ? <div className='h-5 w-5 border-2 rounded-full border-b-black animate-spin'></div> : <div className='p-1 bg-gray-300 rounded-full'><FaPlus /></div>}
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>
            }

        </div>
    )
}
