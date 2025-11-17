import { Calendar, Timer, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Simple scheduling",
    desc: "Set up 1:1 or group sessions, recurring classes, and reminders in a few clicks.",
  },
  {
    icon: Timer,
    title: "In-call tools",
    desc: "HD video, screen-share, and built-in whiteboard to practice recitation together.",
  },
  {
    icon: Trophy,
    title: "Progress tracking",
    desc: "Track surahs, ayahs, tajweed rules, and milestones with friendly dashboards.",
  },
  {
    icon: Users,
    title: "Community growth",
    desc: "Create classes and circles, share updates, and celebrate student achievements.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Everything you need to teach and learn</h2>
        <p className="text-gray-600 text-center mt-3 max-w-3xl mx-auto">
          Streamline your classes with integrated scheduling, calls, and Quran-specific progress tools.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
