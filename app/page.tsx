import React from "react";
import { Button } from "@/components/ui/button";
import { gpts } from "@/db/schema";
import { db } from "@/db/db";
import { Key } from "lucide-react";
import Gpts from "@/components/gpts";


async function App() {
  const results = await db.select().from(gpts);
 

  return (
    <div>
      
      <section className="flex flex-col items-center text-center mt-20">
        <h1 className="text-4xl font-bold">Tous les répertoires GPT !</h1>
        <h2 className="text-2xl mt-4">Liste des GPT n°1 au monde</h2>
        <p className="mt-4">Mis à jour quotidiennement !</p>
        <p className="mt-2">
          Les GPT les plus populaires se trouvent en haut de la liste des GPT
          pour faciliter la navigation parmi plus de 30 000 GPT.
        </p>
      </section>
      
      <section className="mt-20">
        <div className="flex justify-center">
          
        </div>
       
      </section>

      <section>
        
          
         <Gpts results={results}/>
          
        
      </section>
      <div className="max-w-md mx-auto p-6">
        <h1 id="soumettre" className="text-4xl font-bold mb-8">Add Your GPT to GPT list on Allgpts</h1>
        <form>
            <div className="mb-4">
                <label  className="block font-bold text-white">Email Address</label>
                <input type="email"  placeholder="Your@email.com" className="w-full bg-gray-800 text-white p-2 rounded"/>
            </div>
            <div className="mb-4">
                <label  className="block font-bold text-white">GPT URL</label>
                <input type="text"   placeholder="http://chat.openai.com" className="w-full bg-gray-800 text-white p-2 rounded"/>
            </div>
           
            <div className="mb-4">
                <label  className="block">YouTube Video Title</label>
                <input type="text" placeholder="Type here" className="w-full bg-gray-800 text-white p-2 rounded"/>
            </div>
            <div className="mb-4">
                <label className="block">Your Twitter Handle</label>
                <input type="text" placeholder="Type here" className="w-full bg-gray-800 text-white p-2 rounded"/>
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                Submit
            </button>
        </form>
    </div>
    </div>
  );
}

export default App;
