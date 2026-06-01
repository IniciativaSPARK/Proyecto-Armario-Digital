"use client";

import Image from "next/image";
import { useState } from "react";

export default function OutfitsPage() {
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  return (
    <main className="min-h-screen bg-[#F7F7F7] flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-white pb-24">

        <div className="flex justify-center pt-6 pb-4">
          <Image src="/tu-logo.png" alt="Logo" width={70} height={70} />
        </div>

        <div className="border-t border-gray-300"></div>

        <div className="flex justify-between items-center px-4 mt-4">
          <h2 className="text-black text-lg font-medium">
            Mis outfits (6)
          </h2>

          <button className="bg-[#7D2953] text-white px-4 py-2 rounded-lg shadow-md">
            + Crear
          </button>
        </div>

        <div className="px-4 mt-4">
          <div className="bg-[#EEF2F5] rounded-xl px-4 py-4 flex items-center gap-3 shadow-md mb-4">
            <Image src="/icono-buscar.png" alt="Buscar" width={18} height={18} />

            <input
              type="text"
              placeholder="Buscar outfit..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="bg-transparent w-full outline-none text-black text-sm"
            />
          </div>

          <button
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className="w-full bg-[#EEF2F5] rounded-2xl py-4 flex justify-center items-center gap-2 shadow-sm"
          >
            <Image src="/icono-filtro.png" alt="Filtro" width={18} height={18} />
            <span className="text-black text-sm">Filtros</span>
          </button>
        </div>

        <div className="px-4 mt-5">
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src="/outfit-guardado-ejemplo.png"
                    alt="Outfit"
                    width={180}
                    height={220}
                    className="w-full h-[170px] object-contain bg-[#F8F8F8]"
                  />

                  <div className="absolute top-2 right-2 flex gap-2">
                    <Image src="/icono-editar-outfit.png" alt="Editar" width={14} height={14} />
                    <Image src="/icono-eliminar-outfit.png" alt="Eliminar" width={14} height={14} />
                  </div>
                </div>

                <div className="p-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[12px] text-black">Outfit casual</p>
                      <p className="text-[10px] text-gray-600">Generado por IA</p>

                      <div className="mt-1 inline-block bg-gray-100 px-2 py-[2px] rounded-full text-[10px] text-black">
                        Primavera
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setFavoritos(
                          favoritos.includes(item)
                            ? favoritos.filter((id) => id !== item)
                            : [...favoritos, item]
                        )
                      }
                    >
                      <Image
                        src={
                          favoritos.includes(item)
                            ? "/icono-favorito-outfit-activo.png"
                            : "/icono-favorito-outfit.png"
                        }
                        alt="Favorito"
                        width={14}
                        height={14}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-[#EEF2F5] border-t flex justify-around py-3 z-50"
        >
          <div className="flex flex-col items-center">
            <Image src="/icono-inicio.png" alt="Inicio" width={24} height={24} />
            <span className="text-[10px] mt-1">Inicio</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/icono-cargar.png" alt="Cargar" width={24} height={24} />
            <span className="text-[10px] mt-1">Cargar</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/icono-outfits.png" alt="Outfits" width={24} height={24} />
            <span className="text-[10px] mt-1">Outfits</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/icono-perfil.png" alt="Perfil" width={24} height={24} />
            <span className="text-[10px] mt-1">Perfil</span>
          </div>
        </div>

      </div>
    </main>
  );
}
