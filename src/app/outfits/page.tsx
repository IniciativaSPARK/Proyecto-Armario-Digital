"use client";


import { useEffect, useState } from "react";
import { outfitService } from "@/services/outfitService";
import { Outfit } from "@/types/outfit";


import Image from "next/image";

import { useRouter } from "next/navigation";


export default function OutfitsPage() {

  const router = useRouter();

  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [outfits, setOutfits] = useState<Outfit[]>([]);


  useEffect(() => {
    const cargarOutfits = async () => {
      try {
        const data = await outfitService.getOutfits();
        setOutfits(data);
      } catch (error) {
        console.error("Error cargando outfits", error);
      }
    };

    cargarOutfits();
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F7F7] flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-white pb-24">

        <div className="flex justify-center pt-6 pb-4">
          <Image src="/tu-logo.png" alt="Logo" width={70} height={70} />
        </div>

        <div className="border-t border-gray-300"></div>

        <div className="flex justify-between items-center px-4 mt-4">
          <h2 className="text-black text-lg font-medium">
            Mis outfits ({outfits.length})
          </h2>

<button
  onClick={() => router.push("/outfits/crear")}
  className="bg-[#7D2953] text-white px-4 py-2 rounded-lg shadow-md"
>
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
            {outfits.map((outfit) => (
              <div
                key={outfit.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={outfit.imagen}
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
                      <p className="text-[12px] text-black">
                        {outfit.nombre}
                      </p>
                      <p className="text-[10px] text-gray-600">
  {outfit.descripcion}
</p>

                      <div className="mt-1 inline-block bg-gray-100 px-2 py-[2px] rounded-full text-[10px] text-black">
                       {outfit.temporada}
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setFavoritos(
                          favoritos.includes(outfit.id)
                            ?favoritos.filter((id) => id !== outfit.id)
                            : [...favoritos, outfit.id]
                        )
                      }
                    >
                      <Image
                        src={
                          favoritos.includes(outfit.id)
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
<button
  onClick={() => {
    window.location.href = "/inicio";
  }}
  className="flex flex-col items-center"
>
  <Image
    src="/icono-inicio.png"
    alt="Inicio"
    width={24}
    height={24}
  />
  <span className="text-[10px] mt-1">Inicio</span>
</button>

  <button
    onClick={() => router.push("/cargar")}
    className="flex flex-col items-center"
  >
    <Image src="/icono-cargar.png" alt="Cargar" width={24} height={24} />
    <span className="text-[10px] mt-1">Cargar</span>
  </button>

  <button
    onClick={() => router.push("/outfits")}
    className="flex flex-col items-center"
  >
    <Image src="/icono-outfits.png" alt="Outfits" width={24} height={24} />
    <span className="text-[10px] mt-1">Outfits</span>
  </button>

  <button
    onClick={() => router.push("/perfil")}
    className="flex flex-col items-center"
  >
    <Image src="/icono-perfil.png" alt="Perfil" width={24} height={24} />
    <span className="text-[10px] mt-1">Perfil</span>
  </button>
</div>

</div>
</main>
);
}
  
