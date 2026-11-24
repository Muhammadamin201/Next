
const languages = [
  {
    flag: "🇬🇧",
    name: "English",
    native: "English Language",
    description: "English is an important international language. I'm learning it to communicate with people around the world and access global programming resources.",
    focus: ["Speaking", "Grammar", "Vocabulary", "Listening"],
    color: "border-blue-500/40",
  },
  {
    flag: "🇸🇦",
    name: "Arabic",
    native: "اللغة العربية",
    description: "Arabic is a beautiful language. I'm learning it to understand the Quran, improve my pronunciation and explore Arabic literature.",
    focus: ["Reading", "Tajweed", "Pronunciation", "Grammar"],
    color: "border-green-500/40",
  },
  {
    flag: "🇨🇳",
    name: "Chinese",
    native: "中文",
    description: "Mandarin Chinese opens opportunities to explore Chinese culture, communicate internationally and understand a new writing system.",
    focus: ["Pinyin", "Tones", "Characters", "Speaking"],
    color: "border-red-500/40",
  },
];

export default function LanguagesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm">
            Beyond Programming
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            My <span className="text-blue-500">Languages</span>
          </h1>
          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Learning languages helps me discover new cultures,
            communicate with the world and expand my knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {languages.map((language) => (
            <article
              key={language.name}
              className={`bg-slate-900 border ${language.color} rounded-3xl p-8 hover:-translate-y-2 transition duration-300`}
            >
              <div className="text-6xl mb-7">{language.flag}</div>

              <h2 className="text-3xl font-bold">{language.name}</h2>
              <p className="text-blue-400 mt-2">{language.native}</p>

              <p className="text-slate-400 leading-7 mt-6">
                {language.description}
              </p>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Learning Focus</h3>
                <div className="flex flex-wrap gap-2">
                  {language.focus.map((item) => (
                    <span
                      key={item}
                      className="bg-slate-800 text-slate-300 text-sm px-3 py-2 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-600/10 border border-blue-500/20 rounded-3xl p-10">
          <h2 className="text-2xl font-bold">Knowledge Has No Limits</h2>
          <p className="text-slate-400 mt-3">
            Every new language is a new way to see the world.
          </p>
        </div>

      </div>
    </main>
  );
}
