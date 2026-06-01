import Image from "next/image";

export default function Register() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-10 px-4">

      {/* Logo */}
      <Image
        src="/tu-logo.png"
        alt="TuLook Logo"
        width={130}
        height={130}
        className="mb-4"
      />

      {/* Subtexto */}
      <p className="text-[#4B4B4B] text-sm mb-8 text-center">
        Crea tu cuenta y comienza a organizar tu ropa
      </p>

      {/* Card */}
      <div className="w-full max-w-md bg-[#EFE5E5] rounded-3xl shadow-lg p-8">

        {/* Título */}
        <h1 className="text-[44px] font-medium text-[#1F4A73] mb-6">
          Crear Cuenta
        </h1>

        {/* Nombre */}
        <div className="mb-5">
          <label className="block text-black text-sm mb-2">
            Nombre completo
          </label>

          <input
            type="text"
            placeholder="María García"
            className="w-full bg-[#EEF2F5] rounded-xl shadow-md p-4 text-[#4B4B4B] outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-black text-sm mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="tu@email.com"
            className="w-full bg-[#EEF2F5] rounded-xl shadow-md p-4 text-[#4B4B4B] outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-black text-sm mb-2">
            Contraseña
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-[#EEF2F5] rounded-xl shadow-md p-4 text-[#4B4B4B] outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-5">
          <label className="block text-black text-sm mb-2">
            Confirmar contraseña
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-[#EEF2F5] rounded-xl shadow-md p-4 text-[#4B4B4B] outline-none"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mb-7">
          <input
            type="checkbox"
            className="mt-1 accent-[#8A2C5A]"
          />

          <p className="text-sm text-[#4B4B4B] leading-5">
            Acepto los{" "}
            <span className="text-[#6C63FF] cursor-pointer">
              Términos y Condiciones
            </span>{" "}
            y la{" "}
            <span className="text-[#6C63FF] cursor-pointer">
              Política de Privacidad
            </span>
          </p>
        </div>

        {/* Botón */}
        <button className="w-full bg-[#8A2C5A] hover:bg-[#77224C] transition text-white text-3xl py-4 rounded-xl shadow-md mb-7">
          Crear Cuenta
        </button>

        {/* Login */}
        <p className="text-center text-[#4B4B4B] text-sm">
          ¿Ya tienes una cuenta?{" "}
          <span className="text-[#6C63FF] cursor-pointer">
            Regístrate aquí
          </span>
        </p>

      </div>
    </main>
  );
}