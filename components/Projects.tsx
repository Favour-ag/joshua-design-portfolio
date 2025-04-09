import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AI-Powered Teacher Dashboard",
    slug: "ai-powered-teacher-dashboard",
    role: "UX Designer",
    duration: "4 Months",
    description:
      "Instructors face increasing challenges in managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming and often results in missed opportunities for early intervention.",
    image: "/images/analytics.svg",
    chart: "/images/frame-data.svg",
  },
  {
    title: "Cipher",
    slug: "cipher",
    role: "UX Designer",
    duration: "4 Months",
    description:
      "Construct your edge and decode the markets. Unleash potential for success and fund your future with a futuristic trading platform.",
    image: "/images/analytics.svg",
    chart: "/images/frame-data.svg",
  },
  {
    title: "Booktopia",
    slug: "booktopia",
    role: "UX Designer",
    duration: "4 Months",
    description:
      "Instructors face increasing challenges in managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming and often results in missed opportunities for early intervention.s",
    image: "/images/analytics.svg",
    chart: "/images/frame-data.svg",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-[#060A0F] text-black dark:text-white">
      <div className="pr-8">
        <h2 className="text-4xl font-bold text-center mb-16">My Work</h2>

        <div className="space-y-24">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <div className="grid md:grid-cols-12 gap-12 items-start group cursor-pointer mb-8">
                {/* Left Column: Metadata */}
                <div className="md:col-span-3 space-y-4 bg-inherit">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <div className="text-gray-400 text-sm space-y-1">
                    <p>Role: {project.role}</p>
                    <p>Duration: {project.duration}</p>
                  </div>
                </div>

                {/* Middle Column: Main Image */}
                <div className="md:col-span-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>

                {/* Right Column: Description and Chart */}
                <div className="md:col-span-4 space-y-4">
                  <p className="text-sm text-gray-300 bg-[#597C8F] p-4 rounded-md">
                    {project.description}
                  </p>
                  <Image
                    src={project.chart}
                    alt="Supplementary Visual"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
