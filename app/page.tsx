"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [show, setShow] = useState(false);
  const showImg = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="text-black">
        <h1>Hello, ini home!</h1>
      </div>
      <button className="px-4 py-2 bg-blue-700 rounded-md mt-4" onClick={showImg}>Show image</button>
      {show && (
        <Image src="/img/1.jpg" alt="img home" width={500} height={300} className="opacity-0 transition-opacity duration-1000" onLoadingComplete={(img)=> img.classList.remove('opacity-0')}/>
      )}
    </>
  )
}