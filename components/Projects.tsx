import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AI-Powered Teacher Dashboard",
    slug: "ai-powered-teacher-dashboard", // Unique slug
    role: "UX Designer",
    duration: "4 Months",
    description:
      "Instructors face challenges managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming.",
    image: "/teacher-dashboard.png",
  },
  {
    title: "Cipher",
    slug: "cipher",
    role: "UX Designer",
    duration: "4 Months",
    description:
      "Construct your edge and decode the markets. Unleash potential for success and fund your future with a futuristic trading platform.",
    image: "/cipher.png",
  },
  {
    title: "Booktopia",
    slug: "booktopia",
    role: "UX Designer",
    duration: "4 Months",
    description:
      "A platform to explore, purchase, and read books online, enhancing the digital reading experience.",
    image: "/booktopia.png",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-[#060A0F] text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <div className="space-y-4 border border-gray-800 p-6 rounded-lg cursor-pointer hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">
                  {project.role} • {project.duration}
                </p>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
                <p className="text-gray-300">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
