export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Learn Quran together. Build lifelong connections.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              A modern platform that brings students, teachers, and communities together with scheduling, live sessions, and progress tracking built-in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors">
                Get started free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-50">
                Explore features
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              No credit card required. Designed for masjids, schools, and private tutors.
            </div>
          </div>
          <div>
            <div className="relative rounded-xl border border-gray-200 shadow-sm bg-white p-2">
              <img src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=1600&auto=format&fit=crop" alt="Quran learning" className="rounded-lg object-cover h-[380px] w-full" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Next session</p>
                    <p className="font-semibold text-gray-900">Tajweed with Ustadh Maryam</p>
                  </div>
                  <button className="rounded-md bg-emerald-600 text-white px-3 py-2 text-sm font-medium hover:bg-emerald-700">
                    Join call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
