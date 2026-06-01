"use client";

import Image from "next/image";
import { useState } from "react";

export default function CrearOutfitPage() {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  const imagenesPrendas = [
    "/sombrero.png",
    "/casaca.png",
    "/polo.png",
    "/short.png",
    "/botas.png",
  ]; 

  const sombrerosDisponibles = [1, 2, 3, 4, 5];

  return (
    <main className="min-h-screen bg-[#F7F7F7] flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-white pb-28">

        <div className="flex justify-center pt-4 pb-3">
          <Image src="/tu-logo.png" alt="Logo TuLook" width={90} height={90} />
        </div>

        <div className="border-t border-gray-300"></div>

        <div className="flex justify-between items-center px-5 py-4">
          <h1 className="text-2xl text-black">Crear outfit</h1>
          <button className="text-3xl text-gray-500">×</button>
        </div>

        <div className="px-4">
          <div className="bg-blue-600 rounded-xl shadow-md p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
            
              <span>Tu ubicación</span>
            </div>
            <span className="text-white text-4xl font-bold">22°C</span>
          </div>
        </div>

        <div className="px-4 mt-4">
          <button className="w-full bg-[#A65E82] text-white py-3 rounded-xl shadow-md">
            Ayúdame a elegir según el clima
          </button>
        </div>

        <div className="px-4 mt-6">
          <label className="block text-black mb-2">Nombre del outfit</label>

          <div className="flex gap-2 mb-3">
            <select className="bg-[#A65E82] text-white px-3 py-2 rounded-lg shadow">
              <option>Seleccionar categoría</option>
              <option>Verano</option>
              <option>Otoño</option>
              <option>Invierno</option>
              <option>Primavera</option>
            </select>

            <button className="bg-[#A65E82] text-white px-4 py-2 rounded-lg shadow">
              Guardar 
            </button>
          </div>

          <input
            type="text"
            placeholder="Ej: Outfit Oficina"
            className="w-full bg-[#EEF2F5] rounded-xl p-4 text-black"
          />
        </div>

        <div className="px-4 mt-8 flex flex-col gap-4">
          {imagenesPrendas.map((rutaImagen, indice) => (
            <div key={indice} className="flex items-center justify-between">
              <button className="text-2xl font-bold text-black">◀</button>

              <div
                className={`
                  ${mostrarCategorias ? "w-[170px] h-[70px]" : "w-[240px] h-[120px]"}
                  bg-[#EEF2F5] rounded-[30px] flex justify-center items-center shadow-sm
                `}
              >
                <Image
                  src={rutaImagen}
                  alt="Prenda"
                  width={mostrarCategorias ? 80 : 140}
                  height={mostrarCategorias ? 80 : 140}
                  className="object-contain"
                />
              </div>

              <button className="text-2xl font-bold text-black">▶</button>
            </div>
          ))}
        </div>

        <div className="flex justify-end px-3 mt-2">
        <button
            onClick={() => setMostrarCategorias(!mostrarCategorias)}
            className="
            bg-white
            border
            rounded-md
            p-2
            shadow-lg
            z-40
            "
        >
            <Image
            src="/icono-expandir.png"
            alt="Expandir"
            width={24}
            height={24}
            />
        </button>
        </div>




        {!mostrarCategorias && (
          <div className="mt-6 border-t border-gray-300 pt-3">
            <div className="flex overflow-x-auto gap-2 px-2">
            <div className="min-w-[95px] h-[70px] border bg-white flex justify-center items-center text-center text-xs text-black font-medium">
            Accesorios para la cabeza
            </div>

              {sombrerosDisponibles.map((item) => (
                <div
                  key={item}
                  className="min-w-[70px] h-[70px] border bg-white flex justify-center items-center"
                >
                  <Image
                    src="/sombrero.png"
                    alt="Sombrero"
                    width={55}
                    height={55}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {mostrarCategorias && (
          <div className="border-t border-gray-300 mt-4">
            {[
              "Accesorios para la cabeza",
              "Ropa exterior",
              "Prendas superiores",
              "Prendas inferiores",
              "Calzado",
            ].map((categoria) => (
              <div key={categoria} className="flex border-b bg-white">
                <div className="w-[95px] text-[11px] text-black flex items-center justify-center text-center p-2 border-r">
                {categoria}
                </div>

                <div className="flex-1 overflow-x-auto">
                  <div className="flex gap-1 p-1">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className="min-w-[60px] h-[60px] border flex justify-center items-center"
                      >
                        <Image
                          src="/sombrero.png"
                          alt="Prenda"
                          width={45}
                          height={45}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}



        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-50 bg-[#EEF2F5] border-t flex justify-around py-3">
          <div className="flex flex-col items-center">
            <Image src="/icono-inicio.png" alt="Inicio" width={28} height={28} />
            <span className="text-[11px] text-black mt-1">Inicio</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/icono-cargar.png" alt="Cargar" width={28} height={28} />
            <span className="text-[11px] text-black mt-1">Cargar</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/icono-outfits.png" alt="Outfits" width={28} height={28} />
            <span className="text-[11px] text-black mt-1">Outfits</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/icono-perfil.png" alt="Perfil" width={28} height={28} />
            <span className="text-[11px] text-black mt-1">Perfil</span>
          </div>
        </div>
      </div>
    </main>
  );
}
