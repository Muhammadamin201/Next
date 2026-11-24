
const skillGroups = [
  {
    title: "Frontend Development",
    icon: "🎨",
    description: "Building modern and responsive user interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    description: "Learning server-side development and application logic.",
    skills: ["Python", "Django (Learning Goal)", "REST API (Learning Goal)"],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    description: "Tools I use in my development workflow.",
    skills: ["VS Code", "Git", "GitHub", "Git Bash", "Terminal"],
  },
  {
    title: "Personal Skills",
    icon: "🧠",
    description: "Skills that help me grow as a developer.",
    skills: ["Problem Solving", "Logical Thinking", "Self Learning", "Creativity", "Research"],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
            My Technical Arsenal
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Skills & <span className="text-blue-500">Technologies</span>
          </h1>
          <p className="text-slate-400 mt-5 max-w-2xl">
            Technologies and abilities I'm developing on my
            journey toward becoming a Full-Stack Developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{group.icon}</span>
                <h2 className="text-2xl font-bold">{group.title}</h2>
              </div>

              <p className="text-slate-400 mb-7">{group.description}</p>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-200 hover:bg-blue-600 hover:border-blue-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 bg-gradient-to-r from-blue-700/20 to-indigo-700/20 border border-blue-500/20 rounded-3xl p-10">
          <h2 className="text-3xl font-bold">My Next Goals 🚀</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-8">
            {["Master JavaScript", "Learn React & TypeScript", "Learn Python & Django", "Build Full-Stack Projects"].map((goal) => (
              <div key={goal} className="bg-slate-900/80 rounded-xl p-5 text-slate-300">
                <span className="text-blue-400">✦</span>
                <p className="mt-3">{goal}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
