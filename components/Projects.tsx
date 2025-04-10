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
      "Instructors face increasing challenges in managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming and often results in missed opportunities for early intervention.",
    image: "/images/work2.svg",
    chart: "/images/astro.svg",
  },
  {
    title: "Booktopia",
    slug: "booktopia",
    role: "UX Designer",
    duration: "4 Months",
    description:
      "Instructors face increasing challenges in managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming and often results in missed opportunities for early intervention.",
    image: "/images/booktopia.svg",
    chart: "/images/astro.svg",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-[#060A0F] text-black dark:text-white">
      <div className="px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">My Work</h2>

        <div className="space-y-24">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <div className="grid md:grid-cols-12 gap-12  cursor-pointer mb-16 h-[400px] pr-8">
                {/* Left Column: Title + Metadata in separate outlined boxes with 50% height each */}
                <div className="md:col-span-3 flex flex-col h-full space-y-4">
                  {/* Title Box - Top Half */}
                  <div className="border border-gray-600  p-4 w-full h-1/2 flex items-center">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>

                  {/* Metadata Box - Bottom Half */}
                  <div className="border border-gray-600  p-4 w-full h-1/2 flex flex-col justify-center">
                    <div className="text-gray-400 text-sm space-y-1">
                      <p>Role: {project.role}</p>
                      <p>Duration: {project.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Center Column: Full Height Image */}
                <div className="md:col-span-5 flex items-stretch">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={800}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                  />
                </div>

                {/* Right Column: Description + Chart */}
                <div className="md:col-span-4 flex flex-col justify-between items-start space-y-4">
                  <div className="text-md text-gray-300 bg-[#597C8F] p-4 rounded-md h-1/2 ">
                    {project.description}
                  </div>
                  <div className="h-1/2">
                    <Image
                      src={project.chart}
                      alt="Supplementary Visual"
                      width={300}
                      height={200}
                      className=" w-full "
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
