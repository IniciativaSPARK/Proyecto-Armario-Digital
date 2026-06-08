"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { catalogoService } from "@/services/catalogoService";

import {
  Categoria,
  Temporada,
} from "@/types/catalogo";

export default function UploadPage() {

const router = useRouter();
  const [categorias, setCategorias] =
    useState<Categoria[]>([]);

  const [temporadas, setTemporadas] =
    useState<Temporada[]>([]);

  useEffect(() => {
    const cargarCatalogos = async () => {

      const categoriasData =
        await catalogoService.obtenerCategorias();

      const temporadasData =
        await catalogoService.obtenerTemporadas();

      setCategorias(categoriasData);
      setTemporadas(temporadasData);
    };

    cargarCatalogos();
  }, []);


  return (
    <main className="min-h-screen bg-white flex flex-col items-center pb-24">

      {/* Logo */}
      <div className="pt-6 pb-4">
        <Image
          src="/tu-logo.png"
          alt="Logo TuLook"
          width={85}
          height={85}
        />
      </div>

      {/* Línea divisoria */}
      <div className="w-full border-t border-gray-300 mb-4"></div>

      {/* Título */}
      <h2 className="text-lg font-medium text-black mb-4">
        ¡Sube una prenda!
      </h2>

      {/* Botón galería */}
      <div className="w-full max-w-sm px-4 mb-2">
        <button className="w-full bg-[#7D2953] text-white py-3 rounded-lg shadow-md">
          Elegir de la galería
        </button>
      </div>

      {/* Botón cámara */}
      <div className="w-full max-w-sm px-4 mb-8">
        <button className="w-full bg-[#7D2953] text-white py-3 rounded-lg shadow-md">
          Tomar foto
        </button>
      </div>

      {/* Formulario */}
      <div className="w-full max-w-sm px-4">

        {/* Nombre de la prenda */}
        <label className="block text-sm text-black mb-2">
          Nombre de la prenda *
        </label>

        <input
          type="text"
          placeholder="Ej: Blusa blanca básica"
          className="w-full bg-[#EEF2F5] p-4 rounded-xl mb-5 outline-none text-black placeholder:text-gray-500"
        />

        {/* Categoría */}
        <label className="block text-sm text-black mb-2">
          Categoría *
        </label>

        <select
          className="w-full bg-[#EEF2F5] p-4 rounded-xl mb-5 outline-none text-black"
        >
          <option value="">
            Selecciona una categoría
          </option>

          {categorias.map((categoria) => (
            <option
              key={categoria.id}
              value={categoria.id}
            >
              {categoria.nombre}
            </option>
          ))}


        </select>

        {/* Color */}
        <label className="block text-sm text-black mb-2">
          Color *
        </label>

        <input
          type="text"
          placeholder="Ej: Blanco"
          className="w-full bg-[#EEF2F5] p-4 rounded-xl mb-5 outline-none text-black placeholder:text-gray-500"
        />

        {/* Temporada */}
        <label className="block text-sm text-black mb-2">
          Temporada
        </label>

        <select
          className="w-full bg-[#EEF2F5] p-4 rounded-xl mb-5 outline-none text-black"
        >
          <option value="">
            Selecciona una temporada
          </option>

          {temporadas.map((temporada) => (
            <option
              key={temporada.id}
              value={temporada.id}
            >
              {temporada.nombre}
            </option>
          ))}
        </select>

        {/* Marca */}
        <label className="block text-sm text-black mb-2">
          Marca
        </label>

        <input
          type="text"
          placeholder="Ej: Zara, H&M, Nike"
          className="w-full bg-[#EEF2F5] p-4 rounded-xl mb-5 outline-none text-black placeholder:text-gray-500"
        />

        {/* Notas adicionales */}
        <label className="block text-sm text-black mb-2">
          Notas adicionales
        </label>

        <textarea
          placeholder="Ocasiones especiales, cuidados o combinaciones..."
          className="w-full bg-[#EEF2F5] p-4 rounded-xl h-24 mb-8 outline-none text-black placeholder:text-gray-500"
        />

        {/* Botón guardar */}
        <button
          className="
            w-full
            bg-[#7D2953]
            text-white
            py-4
            rounded-xl
            text-lg
            shadow-md
          "
        >
          Guardar Prenda
        </button>

      </div>

      {/* Barra de navegación inferior */}
<div
  className="
    fixed
    bottom-0
    left-1/2
    -translate-x-1/2
    w-full
    max-w-[390px]
    z-50
    bg-[#EEF2F5]
    border-t
    flex
    justify-around
    py-3
  "
>

  {/* Inicio */}
  <button
    onClick={() => router.push("/inicio")}
    className="flex flex-col items-center"
  >
    <Image
      src="/icono-inicio.png"
      alt="Inicio"
      width={28}
      height={28}
      className="object-contain"
    />
    <span className="text-[11px] text-black mt-1">
      Inicio
    </span>
  </button>

  {/* Cargar */}
  <button
    onClick={() => router.push("/cargar")}
    className="flex flex-col items-center"
  >
    <Image
      src="/icono-cargar.png"
      alt="Cargar"
      width={28}
      height={28}
      className="object-contain"
    />
    <span className="text-[11px] text-black mt-1">
      Cargar
    </span>
  </button>

  {/* Outfits */}
  <button
    onClick={() => router.push("/outfits")}
    className="flex flex-col items-center"
  >
    <Image
      src="/icono-outfits.png"
      alt="Outfits"
      width={28}
      height={28}
      className="object-contain"
    />
    <span className="text-[11px] text-black mt-1">
      Outfits
    </span>
  </button>

  {/* Perfil */}
  <button
    onClick={() => router.push("/perfil")}
    className="flex flex-col items-center"
  >
    <Image
      src="/icono-perfil.png"
      alt="Perfil"
      width={28}
      height={28}
      className="object-contain"
    />
    <span className="text-[11px] text-black mt-1">
      Perfil
    </span>
  </button>

</div>
    </main>
  );
}