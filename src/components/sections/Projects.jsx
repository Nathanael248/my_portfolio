export function Projects() {
  const projects = [
    {
      title: "Mercelia-Shoes e-commerce landing page",
      image: "",
      description:
        "A clean, conversion-focused storefront built with vanilla HTML and CSS — my final project before moving fully into React.",
      github: "https://github.com/Nathanael248/mercelia.git",
      icon: "ti-shopping-bag",
    },
    {
      title: "React collab app",
      image: "/images/projects/react-collab.png",
      description:
        "A real-time collaborative tool built with React and TypeScript, focused on smooth state handling and clean UI feedback.",
      github: "https://github.com/Nathanael248/react-collab.git",
      icon: "ti-users",
    },
    {
      title: "Personal portfolio site",
      image: "/images/projects/personal-portfolio.png",
      description:
        "A bold, projects-first portfolio with Framer Motion animations, a custom cursor effect, and a dark charcoal and lime-green theme.",
      github: "https://github.com/Nathanael248/personal-portfolio.git",
      icon: "ti-id-badge-2",
    },
    {
      title: "Hero / homepage section",
      image: "/images/projects/hero-homepage.png",
      description:
        "A two-column Tailwind CSS layout with pill-shaped CTAs and a dot-grid background, built under the Nathy Papy brand.",
      github: "https://github.com/Nathanael248/hero-homepage.git",
      icon: "ti-layout-grid",
    },
  ];

  // export default function ProjectsSection() {
  return (
    <section className="bg-black w-full px-6 sm:px-12 py-24 rounded-2xl font-['DM_Sans']">
      {/* Heading */}
      <p className="text-blue-500 text-xs font-normal tracking-[2.5px] uppercase mb-2.5">
        Selected work
      </p>
      <h2 className="font-['Syne'] text-3xl font-extrabold text-white mb-9">
        Recent projects
      </h2>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-180">
        {projects.map((project, index) => (
          <a  href={project.github} target="_blank" rel="noopener noreferrer"
            key={index}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-600 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            {/* Image / placeholder */}
            <div className="relative h-50 bg-gradient-to-br from-[#1e3a5f] to-slate-950 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(59,130,246,0.18) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* Replace with:  */}
              <img src={project.image} className="absolute inset-0 w-full h-full object-cover" alt={project.title} />
              {/* <i
                className={`ti ${project.icon} text-4xl text-blue-500 relative z-10`}
              ></i> */}
            </div>

            {/* Body */}
            <div className="p-5 pb-6">
              <h3 className="font-[inter] text-lg font-bold text-white mb-2">
                {project.title}
              </h3>
              {/* text-zinc-400 text-sm font-light leading-relaxed */}
              <p className="text-zinc-400  font-light leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
// }
