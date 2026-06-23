export function Projects() {
  const projects = [
    {
      title: "Shoe e-commerce landing page",
      description:
        "A clean, conversion-focused storefront built with vanilla HTML and CSS — my final project before moving fully into React.",
      icon: "ti-shopping-bag",
    },
    {
      title: "React collab app",
      description:
        "A real-time collaborative tool built with React and TypeScript, focused on smooth state handling and clean UI feedback.",
      icon: "ti-users",
    },
    {
      title: "Personal portfolio site",
      description:
        "A bold, projects-first portfolio with Framer Motion animations, a custom cursor effect, and a dark charcoal and lime-green theme.",
      icon: "ti-id-badge-2",
    },
    {
      title: "Hero / homepage section",
      description:
        "A two-column Tailwind CSS layout with pill-shaped CTAs and a dot-grid background, built under the Nathy Papy brand.",
      icon: "ti-layout-grid",
    },
  ];

  // export default function ProjectsSection() {
  return (
    <section className="bg-black w-full px-6 sm:px-12 py-14 rounded-2xl font-['DM_Sans']">
      {/* Heading */}
      <p className="text-blue-500 text-xs font-normal tracking-[2.5px] uppercase mb-2.5">
        Selected work
      </p>
      <h2 className="font-['Syne'] text-3xl font-extrabold text-white mb-9">
        Recent projects
      </h2>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-600 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            {/* Image / placeholder */}
            <div className="relative h-40 bg-gradient-to-br from-[#1e3a5f] to-slate-950 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(59,130,246,0.18) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* Replace with: <img src={project.image} className="absolute inset-0 w-full h-full object-cover" alt={project.title} /> */}
              <i
                className={`ti ${project.icon} text-4xl text-blue-500 relative z-10`}
              ></i>
            </div>

            {/* Body */}
            <div className="p-5 pb-6">
              <h3 className="font-['Syne'] text-lg font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
// }
