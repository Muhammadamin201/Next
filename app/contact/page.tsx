
const contacts = [
  {
    name: "Telegram",
    username: "@example_username",
    description: "Let's chat on Telegram.",
    icon: "✈️",
    link: "https://t.me/example_username",
    color: "hover:border-sky-500",
  },
  {
    name: "Instagram",
    username: "@example_username",
    description: "Follow my programming journey.",
    icon: "📸",
    link: "https://instagram.com/example_username",
    color: "hover:border-pink-500",
  },
  {
    name: "Gmail",
    username: "example@gmail.com",
    description: "Send me an email.",
    icon: "✉️",
    link: "mailto:example@gmail.com",
    color: "hover:border-red-500",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Let's <span className="text-blue-500">Connect</span>
          </h1>

          <p className="text-slate-400 mt-5 max-w-xl mx-auto leading-7">
            Have an interesting idea, question or collaboration
            opportunity? Feel free to reach out to me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target={contact.name === "Gmail" ? undefined : "_blank"}
              rel={contact.name === "Gmail" ? undefined : "noopener noreferrer"}
              className={`bg-slate-900 border border-slate-800 ${contact.color} rounded-3xl p-8 transition duration-300 hover:-translate-y-2`}
            >
              <span className="text-5xl">{contact.icon}</span>

              <h2 className="text-2xl font-bold mt-7">
                {contact.name}
              </h2>

              <p className="text-blue-400 mt-2 break-all">
                {contact.username}
              </p>

              <p className="text-slate-400 mt-5">
                {contact.description}
              </p>

              <div className="mt-8 text-sm font-semibold text-white">
                Contact Now →
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center">
          <div className="text-4xl mb-5">💻</div>

          <h2 className="text-2xl font-bold">
            Let's Build Something Great!
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            I'm always interested in learning, sharing ideas
            and discovering new opportunities in technology.
          </p>

          <p className="text-blue-400 mt-8 font-medium">
            Muhammadamin | Future Full-Stack Developer
          </p>
        </div>

      </div>
    </main>
  );
}
