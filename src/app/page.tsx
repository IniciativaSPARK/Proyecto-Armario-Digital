import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center px-6 py-8">
      <main className="w-full max-w-225 rounded-3xl border border-slate-200 bg-white px-12 py-12 shadow-[0_1px_2px_rgba(38,84,124,0.04),0_20px_60px_rgba(38,84,124,0.08)] max-sm:px-6 max-sm:py-8">

        {/* Brand */}
        <header className="mb-12 flex items-center gap-3 max-sm:mb-8">
          <div className="flex h-11 w-11 items-center justify-center">
            <Image
              src="/spark-logo.png"
              alt="Logo Spark"
              width={44}
              height={44}
            />
          </div>

          <span className="text-[1.1rem] font-bold tracking-[0.35em] text-[#26547C]">
            SPARK
          </span>
        </header>

        {/* Hero */}
        <section className="mb-12 max-sm:mb-8">

          <span className="mb-5 inline-block rounded-full bg-[rgba(38,84,124,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#26547C]">
            Proyecto en construcción
          </span>

          <h1 className="mb-4 text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-slate-900">
            Bienvenido a{' '}

            <span className="relative inline-block text-[#26547C] after:absolute after:left-0 after:right-0 after:bottom-[0.05em] after:-z-10 after:h-[0.25em] after:rounded-xs after:bg-[#FFD166] after:opacity-55 after:content-['']">
              Armario Digital
            </span>

          </h1>

          <p className="max-w-150 text-lg leading-relaxed text-slate-500">
            Organiza tu armario desde una aplicación web.
          </p>

        </section>

        {/* Cards */}
        <section className="mb-8 grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-sm:gap-3">

          <article className="rounded-[14px] border border-slate-200 bg-slate-50 px-6 py-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(38,84,124,0.08)]">

            <span className="mb-3 block h-2 w-2 rounded-full bg-[#FF8C66]" />

            <h3 className="mb-1 text-base font-bold text-slate-900">
              Frontend
            </h3>

            <p className="text-sm text-slate-500">
              React · Next.Js
            </p>

          </article>

          <article className="rounded-[14px] border border-slate-200 bg-slate-50 px-6 py-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(38,84,124,0.08)]">

            <span className="mb-3 block h-2 w-2 rounded-full bg-[#26547C]" />

            <h3 className="mb-1 text-base font-bold text-slate-900">
              Backend
            </h3>

            <p className="text-sm text-slate-500">
              Supabase
            </p>

          </article>

          <article className="rounded-[14px] border border-slate-200 bg-slate-50 px-6 py-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(38,84,124,0.08)]">

            <span className="mb-3 block h-2 w-2 rounded-full bg-[#FFD166]" />

            <h3 className="mb-1 text-base font-bold text-slate-900">
              Base de Datos
            </h3>

            <p className="text-sm text-slate-500">
              PostgreSQL
            </p>

          </article>

        </section>

        {/* Reminder */}
        <aside className="mb-8 flex items-start gap-4 rounded-[10px] border-l-[3px] border-[#FFD166] bg-[rgba(38,84,124,0.04)] px-6 py-5 max-sm:px-5 max-sm:py-4">

          <div
            className="mt-[0.15rem] flex h-7 w-7 shrink-0 items-center justify-center"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                fill="#FFD166"
                stroke="#26547C"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>

            <h4 className="mb-1 text-[0.95rem] font-bold tracking-[0.01em] text-[#26547C]">
              Antes de empezar
            </h4>

            <p className="text-[0.9rem] leading-relaxed text-slate-800/85">
              Crea tu propia rama en el repo y realiza un commit para confirmar que estás listo para desarrollar las actividades específicas.
            </p>

          </div>

        </aside>

        {/* Footer */}
        <footer className="flex items-center gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500">

          <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF8C66]" />

          <span>
            ¿Estás listo?
          </span>

        </footer>

      </main>
    </div>
  )
}