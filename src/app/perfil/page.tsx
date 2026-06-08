"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { perfilService } from "@/services/perfilService";

import {
  Usuario,
  OpcionMenu,
} from "@/types/perfil";

export default function PerfilPage() {
  const router = useRouter();
  const [usuario, setUsuario] =
    useState<Usuario | null>(null);

  const [opcionesMenu, setOpcionesMenu] =
    useState<OpcionMenu[]>([]);

  useEffect(() => {

    const cargarPerfil = async () => {

      const usuarioData =
        await perfilService.obtenerUsuario();

      const opcionesData =
        await perfilService.obtenerOpcionesMenu();

      setUsuario(usuarioData);
      setOpcionesMenu(opcionesData);
    };

    cargarPerfil();

  }, []);

  return (
    <main className="min-h-screen bg-[#F7F7F7] flex justify-center">

      <div className="w-full max-w-[390px] min-h-screen bg-white pb-24">

        {/* Logo */}
        <div className="flex justify-center pt-4 pb-3">
          <Image
            src="/tu-logo.png"
            alt="Logo"
            width={90}
            height={90}
          />
        </div>

        <div className="border-t border-gray-300"></div>

        {/* Encabezado */}
        <div className="px-6 py-4">

          <h1 className="text-3xl text-black">
            Mi perfil
          </h1>

        </div>

        {/* Usuario */}
        <div className="flex flex-col items-center mt-8">

          <Image
            src={usuario?.imagen || "/usuario-logo.png"}
            alt="Usuario"
            width={120}
            height={120}
          />

          <h2 className="text-3xl text-black mt-3">
            {usuario?.nombre}
          </h2>

          <p className="text-gray-600 text-sm">
            {usuario?.correo}
          </p>

        </div>

        {/* Menú */}
        <div className="mx-6 mt-8 bg-[#F1F1F1] rounded-3xl shadow-md overflow-hidden">
          {opcionesMenu.map((opcion) => (

            <button
              key={opcion.id}
              className="w-full flex items-center justify-between px-5 py-4 border-b"
            >

              <div className="flex items-center gap-4">

                <Image
                  src={opcion.icono}
                  alt={opcion.titulo}
                  width={24}
                  height={24}
                />

                <span className="text-black text-xl">
                  {opcion.titulo}
                </span>

              </div>

              <span className="text-2xl">›</span>

            </button>

          ))}

          {/* Cerrar sesión */}
          <button className="w-full flex items-center justify-between px-5 py-4">

            <div className="flex items-center gap-4">
              <Image
                src="/icono-cerrarSesion.png"
                alt="Cerrar sesión"
                width={24}
                height={24}
              />
              <span className="text-red-600 text-xl">
                Cerrar sesión
              </span>
            </div>

            <span className="text-2xl">›</span>

          </button>

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
            flex
            justify-around
            py-3
            z-50
          "
        >

          <button
  onClick={() => router.push("/inicio")}
  className="flex flex-col items-center"
>
  <Image
    src="/icono-inicio.png"
    alt="Inicio"
    width={24}
    height={24}
  />
  <span className="text-[10px] mt-1">
    Inicio
  </span>
</button>

<button
  onClick={() => router.push("/cargar")}
  className="flex flex-col items-center"
>
  <Image
    src="/icono-cargar.png"
    alt="Cargar"
    width={24}
    height={24}
  />
  <span className="text-[10px] mt-1">
    Cargar
  </span>
</button>

<button
  onClick={() => router.push("/outfits")}
  className="flex flex-col items-center"
>
  <Image
    src="/icono-outfits.png"
    alt="Outfits"
    width={24}
    height={24}
  />
  <span className="text-[10px] mt-1">
    Outfits
  </span>
</button>

<button
  onClick={() => router.push("/perfil")}
  className="flex flex-col items-center"
>
  <Image
    src="/icono-perfil.png"
    alt="Perfil"
    width={24}
    height={24}
  />
  <span className="text-[10px] mt-1">
    Perfil
  </span>
</button>
          </div>

        </div>

    </main>
  );
}