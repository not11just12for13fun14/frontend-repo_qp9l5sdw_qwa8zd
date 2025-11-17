export default function Progress() {
  return (
    <section id="progress" className="py-16 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900">Track every step with purpose</h2>
            <p className="text-gray-600 mt-3">
              Build personalized plans by surah and ayah. Record memorization status, tajweed focus areas, and session notes — and watch growth over time.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex gap-2"><span className="text-emerald-600">•</span> Juz-by-juz and surah-by-surah tracking</li>
              <li className="flex gap-2"><span className="text-emerald-600">•</span> Review cycles and spaced repetition reminders</li>
              <li className="flex gap-2"><span className="text-emerald-600">•</span> Teacher feedback and voice notes</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Student</p>
                  <p className="font-semibold">Aisha Khan</p>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Hifdh</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="p-3 rounded-lg bg-gray-50">Juz completed<br/><span className="text-2xl font-bold">6</span></div>
                  <div className="p-3 rounded-lg bg-gray-50">Surahs reviewed<br/><span className="text-2xl font-bold">21</span></div>
                  <div className="p-3 rounded-lg bg-gray-50">Streak<br/><span className="text-2xl font-bold">14d</span></div>
                </div>
                <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-2/5 bg-emerald-500" />
                </div>
                <div className="text-sm text-gray-600">Current: Surah Al-Kahf 1-20 • Review set due tomorrow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
