"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import ToggleColorButton from "@/components/changeBG";
import { useState, Suspense } from "react";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  const [bgColor , setBgColor] = useState("bg-gray-900 text-white")

  return (
    <html lang="en">
    <body  className={`${inter.className} `}>
    <main className={bgColor}>
  <section className="flex justify-between items-center p-6">
    <div className="">
      <a href="/" className="text-3xl font-bold text-green-500"><span >ALL</span> GPTs</a>
    </div>
   <ToggleColorButton bgColor={bgColor} setBgColor={setBgColor} />
    <nav className="flex space-x-4">
      <a href="#" className="font-bold hover:text-white">
        Parcourir par catégories
      </a>
      <a href="#soumettre" className=" font-bold hover:text-white">
        + Soumettre un GPT
      </a>
      <a
        href="#"
        className="bg-green-500 text-white font-bold px-4 py-2 rounded"
      >
        Boostez votre projet
      </a>
    </nav>
  </section>
  <Suspense>{children}</Suspense>
    
   
    </main>
  </body>
    </html>
  );
}
