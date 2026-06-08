"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function DetallePrendaPage() {
  const params = useParams();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#F7F7F7] flex justify-center">
      <div className="w-full max-w-[390px] bg-white min-h-screen pb-24">

        <div className="flex justify-center pt-6 pb-4">
          <Image
            src="/tu-logo.png"
            alt="Logo"
            width={85}
            height={85}
          />
        </div>

        <div className="border-t border-gray-300"></div>

        <div className="p-4">

          <button
            onClick={() => router.back()}
            className="text-[#7D2953] mb-4"
          >
            ← Volver
          </button>

          <h1 className="text-xl font-medium text-black mb-4">
            Detalle de Prenda
          </h1>

          <div className="bg-[#F4F4F4] rounded-xl p-4 shadow-md">

            <div className="flex justify-center mb-4">
              <Image
                src="/polo.png"
                alt="Prenda"
                width={180}
                height={220}
              />
            </div>

            <div className="space-y-2 text-black">
              <p><strong>ID:</strong> {params.id}</p>
              <p><strong>Nombre:</strong> Blusa blanca</p>
              <p><strong>Categoría:</strong> Blusas</p>
              <p><strong>Color:</strong> Blanco</p>
              <p><strong>Temporada:</strong> Primavera</p>
              <p><strong>Marca:</strong> Zara</p>
            </div>

          </div>

          <div className="flex gap-3 mt-6">
            <button className="flex-1 bg-[#7D2953] text-white py-3 rounded-xl">
              Editar
            </button>

            <button className="flex-1 bg-red-500 text-white py-3 rounded-xl">
              Eliminar
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}