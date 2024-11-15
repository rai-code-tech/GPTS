"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

type Props = { results: any[] }; // Assurez-vous que results est un tableau d'objets

const Gpts = ({results} : Props ) =>{
  const [query, setQuery] = useState("")

    // Fonction pour filtrer les résultats en fonction de la recherche
    const filteredResults = results.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <div className="text-center">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search among items..."
                className="bg-gray-800 text-white px-4 py-2 rounded w-1/2"
            />
            
            <div className="flex justify-center flex-wrap gap-8 p-8 mb-4">
                {filteredResults.map((item) => (
                    <a key={item.id} href={`/tools/${item.id}`} target="_blank" rel="noopener noreferrer">
                        <div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 h-64 border border-gray-600 flex flex-col justify-between"
                        >
                            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                            <p className="text-gray-400 flex-grow">{item.description}</p>
                            <Button size={'icon'}>
                           

                            </Button>
                        </div>
                        
                    </a>
                    
                ))}
                
            </div>
        </div>
    );
};

export default Gpts;
