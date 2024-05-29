import React from "react";

function App() {
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
        <p className="mt-2">
          Allgpts est fait par{" "}
          <a href="#" className="text-green-500">
            @johnrushx
          </a>
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
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Tous
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Analyse
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Assistant
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            L'audio
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Entraîneur
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Convertisseur
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Conception
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Commerce Électronique
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Éducation
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            E-Mail
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Collecte De Fonds
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Guide
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Passe-Temps
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Humour
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Légal
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Commercialisation
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Mathématiques
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Médical
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Nouvelles
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Open Source
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Produit
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            La Programmation
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Recette
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
            Recherche
          </button>
        </div>
      </section>
    </body>
  );
}

export default App;
