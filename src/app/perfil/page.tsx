"use client";

import Image from "next/image";

export default function PerfilPage() {
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
            src="/usuario-logo.png"
            alt="Usuario"
            width={120}
            height={120}
          />

          <h2 className="text-3xl text-black mt-3">
            Usuario
          </h2>

          <p className="text-gray-600 text-sm">
            valerygamboa@gmail.com
          </p>

        </div>

        {/* Menú */}
        <div className="mx-6 mt-8 bg-[#F1F1F1] rounded-3xl shadow-md overflow-hidden">

          {/* Editar perfil */}
          <button className="w-full flex items-center justify-between px-5 py-4 border-b">

            <div className="flex items-center gap-4">
              <Image
                src="/usuario-logo.png"
                alt="Editar perfil"
                width={24}
                height={24}
              />
              <span className="text-black text-xl">
                Editar perfil
              </span>
            </div>

            <span className="text-2xl">›</span>

          </button>

          {/* Configuración */}
          <button className="w-full flex items-center justify-between px-5 py-4 border-b">

            <div className="flex items-center gap-4">
              <Image
                src="/icono-configuracion.png"
                alt="Configuración"
                width={24}
                height={24}
              />
              <span className="text-black text-xl">
                Configuración
              </span>
            </div>

            <span className="text-2xl">›</span>

          </button>

          {/* Favoritos */}
          <button className="w-full flex items-center justify-between px-5 py-4 border-b">

            <div className="flex items-center gap-4">
            <Image
                src="/icono-favorito-activo-decorativo.png"
                alt="Favoritos"
                width={24}
                height={24}
                />
              <span className="text-black text-xl">
                Favoritos
              </span>
            </div>

            <span className="text-2xl">›</span>

          </button>

          {/* Notificaciones */}
          <button className="w-full flex items-center justify-between px-5 py-4 border-b">

            <div className="flex items-center gap-4">
              <Image
                src="/icono-notificaciones.png"
                alt="Notificaciones"
                width={24}
                height={24}
              />
              <span className="text-black text-xl">
                Notificaciones
              </span>
            </div>

            <span className="text-2xl">›</span>

          </button>

          {/* Ayuda */}
          <button className="w-full flex items-center justify-between px-5 py-4 border-b">

            <div className="flex items-center gap-4">
              <Image
                src="/icono-ayuda.png"
                alt="Ayuda"
                width={24}
                height={24}
              />
              <span className="text-black text-xl">
                Ayuda y soporte
              </span>
            </div>

            <span className="text-2xl">›</span>

          </button>

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