"use client"

import React, { useState } from 'react';

// recevoir bgcolor 
// receboir le setBgcolor

type Props = {bgColor: string , setBgColor : (bg:string) => void}// void = fonction que ne retourne rien

const ToggleColorButton = ({bgColor, setBgColor}:Props ) => {
 
 const [butColor, setButColor] = useState("bg-white text-black")

 

 const toggleColor =()=> {

  if (bgColor === "bg-white text-black") {

    setBgColor("bg-gray-900 text-white");
    setButColor("bg-white text-black")

    

} else if (bgColor === "bg-gray-900 text-white") {
  
    setBgColor("bg-white text-black");
    setButColor("bg-gray-900 text-white")

}
 
 }
 
 return (
    
   <button  onClick={toggleColor} className={`${butColor}  border border-gray-300 px-4 py-2 rounded  focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-200`}> {bgColor === "bg-white text-black" ? "mode sombre" : "mode clair"} </button>
 )
 
}

export default ToggleColorButton