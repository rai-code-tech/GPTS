import React from "react";
import { Button } from "@/components/ui/button";
import { gpts } from "@/db/schema";
import { db } from "@/db/db";

async function App() {
  const results = await db.select().from(gpts);

  return (
    <body className="bg-gray-800 text-white">
      <section className="flex justify-between items-center p-6">
        <div className="text-white">
          <button>All </button>
          <button className="text-3xl font-bold text-green-500"> GPTs</button>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-white font-bold hover:text-white">
            Parcourir par catégories
          </a>
          <a href="#" className="text-white font-bold hover:text-white">
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
          <input
            type="text"
            placeholder="Search among 3748 items..."
            className="bg-gray-900 text-white px-4 py-2 rounded w-1/2"
          />
        </div>
        <div className="flex flex-wrap justify-center mt-4 space-x-2">
          <Button>Tous</Button>
          <Button>Analyse</Button>
          <Button>Assistant</Button>
          <Button>Laudio</Button>
          <Button>Entraîneur</Button>
          <Button>Convertisseur</Button>
          <Button>Conception</Button>
          <Button>Commerce Électronique</Button>
          <Button>Éducation</Button>
          <Button>E-Mail</Button>
          <Button>Collecte De Fonds</Button>
          <Button>Guide</Button>
          <Button>Passe-Temps</Button>
          <Button>Humour</Button>
          <Button>Légal</Button>
          <Button>Commercialisation</Button>
          <Button>Mathématiques</Button>
          <Button>Médical</Button>
          <Button>Nouvelles</Button>
          <Button>Open Source</Button>
          <Button>Produit</Button>
          <Button>La Programmation</Button>
          <Button>Recette</Button>
          <Button>Recherche</Button>
        </div>
      </section>

      <section>
        <div className="flex justify-center flex-wrap gap-8 p-8 mb-4">
          {results.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 h-64 border border-gray-600 flex flex-col justify-between"
            >
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-400 flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </body>
  );
}

export default App;
