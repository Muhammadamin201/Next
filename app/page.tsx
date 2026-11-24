
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-36">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-8">
              ✦ Welcome to my portfolio
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-500">Muhammadamin</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mt-6 text-slate-300">
              Future Full-Stack Developer
            </h2>

            <p className="text-slate-400 text-lg leading-8 mt-6 max-w-xl">
              I'm a passionate learner interested in programming,
              technology and languages. My goal is to become a
              professional Full-Stack Developer and build useful
              digital products.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/skills"
                className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition"
              >
                Explore Skills →
              </Link>

              <Link
                href="/contact"
                className="border border-slate-700 hover:border-blue-500 px-7 py-3 rounded-xl transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />

            <div className="relative border border-slate-800 bg-slate-900 rounded-3xl p-8 shadow-2xl">
              <div className="flex gap-2 mb-8">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <pre className="text-sm md:text-base leading-8 overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span> = {"{"}
                  {"\n"}
                  {"  "}name: <span className="text-green-400">"Muhammadamin"</span>,
                  {"\n"}
                  {"  "}role: <span className="text-green-400">"Full-Stack Developer"</span>,
                  {"\n"}
                  {"  "}passion: <span className="text-green-400">"Programming"</span>,
                  {"\n"}
                  {"  "}learning: [
                  {"\n"}
                  {"    "}<span className="text-yellow-300">"JavaScript"</span>,
                  {"\n"}
                  {"    "}<span className="text-yellow-300">"React"</span>,
                  {"\n"}
                  {"    "}<span className="text-yellow-300">"Python"</span>,
                  {"\n"}
                  {"    "}<span className="text-yellow-300">"Django"</span>
                  {"\n"}
                  {"  "}],
                  {"\n"}
                  {"  "}goal: <span className="text-green-400">"Never stop learning"</span>
                  {"\n"}
                  {"};"}
                </code>
              </pre>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-slate-500 text-sm">developer.ts</span>
                <span className="text-green-400 text-sm">● Available to learn</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-10">My Learning Journey</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            ["01", "Frontend", "HTML, CSS, JavaScript, React"],
            ["02", "Backend", "Python, Django"],
            ["03", "Languages", "English, Arabic, Chinese"],
            ["04", "Personal Growth", "Learning, creativity, problem solving"],
          ].map(([number, title, description]) => (
            <div key={number} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500 transition">
              <span className="text-blue-500 text-sm">{number}</span>
              <h3 className="text-xl font-bold mt-4">{title}</h3>
              <p className="text-slate-400 mt-3">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
