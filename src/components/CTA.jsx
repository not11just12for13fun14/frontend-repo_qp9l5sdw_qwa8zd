export default function CTA() {
  return (
    <section id="get-started" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 sm:p-12 text-white">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold">Start your Quran journey today</h3>
              <p className="mt-2 text-emerald-100">Create a class, invite students, and schedule your first session in minutes.</p>
            </div>
            <div className="flex gap-3">
              <a href="/test" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 font-medium hover:bg-white/20 transition-colors">Try backend test</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-white text-emerald-700 px-5 py-3 font-medium hover:bg-emerald-50 transition-colors">Create free account</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
