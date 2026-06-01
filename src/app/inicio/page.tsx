"use client";

import Image from "next/image";
import { useState } from "react";

    const prendas = Array(6).fill({
      nombre: "Blusa rosa clásica",
      categoria: "Blusas",
      imagen: "/blusa-rosa.png",
    });
export default function HomePage() {

  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const [favoritos, setFavoritos] = useState<number[]>([]);

  return (
    <main className="min-h-screen bg-[#F7F7F7] flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-[#F7F7F7] pb-24">

      

      {/* Logo */}
      <div className="flex justify-center pt-6 pb-4">
        <Image
          src="/tu-logo.png"
          alt="Logo"
          width={85}
          height={85}
        />
      </div>

      {/* Línea */}
      <div className="w-full border-t border-gray-300 mb-5"></div>

      {/* Search */}
      <div className="w-full max-w-[370px] px-4 mb-4">
        <input
          type="text"
          placeholder="Buscar prendas..."
          className="
            w-full
            bg-[#EEF2F5]
            shadow-md
            rounded-xl
            px-5
            py-4
            text-black
            placeholder:text-[#6B6B6B]
            text-sm
            outline-none
          "
        />
      </div>

      {/* Botón filtros */}
      <div className="w-full max-w-[370px] px-4 mb-8">
        <button
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className="
              w-full
              bg-[#EEF2F5]
            shadow-md
            rounded-xl
            py-4
            text-[#3D3D3D]
            text-sm
          "
        >
          <div className="flex justify-center items-center gap-2">
  <Image
    src="/icono-filtro.png"
    alt="Filtro"
    width={18}
    height={18}
  />
  <span>Filtros</span>
</div>
        </button>
      </div>

{mostrarFiltros && (

  <div className="w-full max-w-[370px] px-4 mb-6">

    <div className="bg-white rounded-xl shadow-md p-3 flex flex-wrap gap-2">

<button className="bg-[#EEF2F5] text-black px-3 py-1 rounded-full text-xs">
  Blusas
</button>

<button className="bg-[#EEF2F5] text-black px-3 py-1 rounded-full text-xs">
  Pantalones
</button>

<button className="bg-[#EEF2F5] text-black px-3 py-1 rounded-full text-xs">
  Casacas
</button>

<button className="bg-[#EEF2F5] text-black px-3 py-1 rounded-full text-xs">
  Vestidos
</button>

<button className="bg-[#EEF2F5] text-black px-3 py-1 rounded-full text-xs">
  Calzado
</button>

<button className="bg-[#7D2953] text-white px-3 py-1 rounded-full text-xs">
  Favoritas
</button>

    </div>

  </div>

)}


      {/* Header */}
      <div className="w-full max-w-[370px] px-4 flex justify-between items-center mb-4">

        <h2 className="text-[18px] text-black font-medium">
          Mis prendas (6)
        </h2>

        <div className="flex gap-3">

  <Image
    src="/icono-editar-prenda.png"
    alt="Editar"
    width={16}
    height={16}
  />

  <Image
    src="/icono-eliminar-prenda.png"
    alt="Eliminar"
    width={16}
    height={16}
  />

</div>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 px-4 max-w-[370px]">

        {prendas.map((prenda, index) => (

          <div
            key={index}
            className="
              bg-[#F4F4F4]
              rounded-lg
              shadow-md
              overflow-hidden
            "
          >

            {/* Imagen */}
            <div className="flex justify-center pt-3">
              <Image
                src={prenda.imagen}
                alt={prenda.nombre}
                width={120}
                height={150}
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="px-2 pb-3">

              <div className="flex justify-between items-start">

                <div>
                  <p className="text-[12px] text-black leading-4">
                    {prenda.nombre}
                  </p>

                  <p className="text-[11px] text-[#5C5C5C]">
                    {prenda.categoria}
                  </p>
                </div>

               <Image
                src={
                  favoritos.includes(index)
                    ? "/icono-favorito-prenda-activo.png"
                    : "/icono-favorito-prenda.png"
                }
                alt="Favorito"
                width={14}
                height={14}
                className="cursor-pointer"
                onClick={() => {

                  if (favoritos.includes(index)) 
                  {

                    setFavoritos(
                      favoritos.filter((id) => id !== index)
                    );

                  } 
                  else 
                    {

                    setFavoritos([
                      ...favoritos,
                      index,
                    ]);

                  }

                }}
              />

              </div>

              <span
                className="
                  inline-block
                  mt-1
                  bg-[#D9D9D9]
                  px-2
                  py-[2px]
                  rounded
                  text-[10px]
                  text-black
                "
              >
                Blusas
              </span>

            </div>
          </div>

        ))}

      </div>

      {/* Navbar */}
      <div
        className="
          fixed
          bottom-0
          left-1/2
          -translate-x-1/2
          w-full
          max-w-[390px]
          bg-[#EEF2F5]
          border-t
          border-gray-300
          flex
          justify-around
          py-3
        "
      >

        <div className="flex flex-col items-center text-black text-[11px]">
          <span className="text-xl"><Image
            src="/icono-inicio.png"
            alt="Inicio"
            width={24}
            height={24}
          /></span>
          Inicio
        </div>

        <div className="flex flex-col items-center text-black text-[11px]">
          <span className="text-xl"><Image
            src="/icono-cargar.png"
            alt="Cargar"
            width={24}
            height={24}
          /></span>
                    Cargar
        </div>

        <div className="flex flex-col items-center text-black text-[11px]">
          <span className="text-xl"><Image
            src="/icono-outfits.png"
            alt="Outfits"
            width={24}
            height={24}
          /></span>
          Outfits
        </div>

        <div className="flex flex-col items-center text-black text-[11px]">
          <span className="text-xl"><Image
              src="/icono-perfil.png"
              alt="Perfil"
              width={24}
              height={24}
            /></span>
          Perfil
        </div>

      </div>
 </div>
    </main>
  );
}