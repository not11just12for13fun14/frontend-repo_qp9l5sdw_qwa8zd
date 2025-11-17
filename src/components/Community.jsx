import { MessageCircle, Star, Users } from "lucide-react";

export default function Community() {
  return (
    <section id="community" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">Grow a thriving community</h2>
            <p className="text-gray-600 mt-3 max-w-2xl">
              Create circles, share updates, and celebrate milestones. Invite parents and guardians to follow progress and encourage consistent practice.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
                <div className="h-10 w-10 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">Classes & circles</h3>
                <p className="text-sm text-gray-600 mt-2">Organize students into groups for group recitation and peer support.</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
                <div className="h-10 w-10 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">Announcements</h3>
                <p className="text-sm text-gray-600 mt-2">Share updates, competitions, and reminders with your whole cohort.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-amber-500"><Star className="h-5 w-5" /><span className="font-semibold">What teachers say</span></div>
            <div className="mt-4 space-y-4">
              <blockquote className="text-gray-700">“It keeps my students consistent and makes scheduling classes effortless.”<footer className="text-sm text-gray-500 mt-2">— Ustadha Fatimah</footer></blockquote>
              <blockquote className="text-gray-700">“The progress view is perfect for parents. They love seeing real growth.”<footer className="text-sm text-gray-500 mt-2">— Ustadh Ali</footer></blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
