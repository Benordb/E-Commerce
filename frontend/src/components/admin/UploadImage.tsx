import { api } from '@/lib/axios';
import React, { ChangeEvent, useState } from 'react'

export const UploadImage = () => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState<File | null>(null)
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        if (files) setImage(files[0])
    }
    const handleUpload = async () => {
        if (!image) return;
        setLoading(true);
        const formData = new FormData();
        formData.append('image', image);
        const res = await api.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setUploadedImageUrl(res.data.secure_url);
        setLoading(false);
    }
    console.log(uploadedImageUrl)
    return (
        <div>UploadImage
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? 'Loading...' : 'Upload'}
            </button>
        </div>
    )
}
