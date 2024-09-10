"use client"
import { ProductsGrid } from "@/components";
// import { api } from "@/lib/axios";
// import { useEffect, useState } from "react";


export default function Home() {
  // const [result, setResult] = useState("")
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await api.get("/")
  //     setResult(res.data.message)
  //   }
  //   getData()
  //   console.log(result)
  // })
  return (
    <>
      <ProductsGrid />
    </>
  );
}
//rafc