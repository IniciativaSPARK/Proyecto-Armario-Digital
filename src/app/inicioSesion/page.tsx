import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-white flex flex-col items-center pt-10 px-4">
      
      {/* Logo */}
      <Image
        src="/tu-logo.png"
        alt="TuLook Logo"
        width={150}
        height={150}
        className="mb-2"
      />

      {/* Título */}
      <h1 className="text-5xl font-semibold text-[#7D2953] mb-3">
        ¡Bienvenido/a de nuevo!
      </h1>

      {/* Subtexto */}
      <p className="text-gray-600 text-sm mb-10">
        Tu guardarropa inteligente en tus manos
      </p>

      {/* Card Login */}
      <div className="w-full max-w-md bg-[#EEE4E4] rounded-3xl p-8 shadow-lg">

        {/* Título login */}
        <h2 className="text-4xl text-[#1F4A73] font-medium mb-6">
          Iniciar sesión
        </h2>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm mb-2 text-black">
            Email
          </label>

          <input
            type="email"
            placeholder="tu@email.com"
            className="w-full bg-[#ECEFF3] shadow-md rounded-xl p-4 outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-sm mb-2 text-black">
            Contraseña
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-[#ECEFF3] shadow-md rounded-xl p-4 outline-none"
          />
        </div>

        {/* Recordarme */}
        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" />

          <p className="text-sm text-gray-600">
            Recordarme
          </p>

          <a
            href="#"
            className="text-sm text-[#6C63FF]"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Botón */}
        <button className="w-full bg-[#7D2953] shadow-md text-white py-4 rounded-xl text-xl mb-6">
          Log In
        </button>

        {/* Registro */}
        <p className="text-sm text-gray-600 text-center">
          ¿No tienes una cuenta?{" "}
          <span className="text-[#6C63FF] cursor-pointer">
            Regístrate aquí
          </span>
        </p>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 mt-10">
        Al continuar, aceptas nuestros <br />
        Términos de Servicio y Política de Privacidad
      </p>
    </main>
  );
}