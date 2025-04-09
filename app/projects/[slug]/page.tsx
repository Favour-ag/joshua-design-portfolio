import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AI-Powered Teacher Dashboard",
    slug: "ai-powered-teacher-dashboard",
    role: "UX Designer",
    duration: "4 Months",
    overview:
      "Instructors face challenges managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming.",
    audience:
      "Instructors, Academic institutions, and higher education students.",
    challenge:
      "Instructors need an efficient way to track student performance, predict struggles, and offer timely support.",
    solution:
      "A smart dashboard with AI-driven insights, grade prediction analysis, and visualization tools for easy tracking.",
    keyFindings: [
      "Instructors struggle with large class sizes.",
      "Tracking student performance manually is error-prone.",
      "AI can help predict struggling students early.",
    ],
    images: {
      hero: "/teacher-dashboard.png",
      insights: "/insights-chart.png",
      performance: "/performance-chart.png",
      aiAlerts: "/ai-alerts.png",
    },
  },
  {
    title: "Cipher",
    slug: "cipher",
    role: "UX Designer",
    duration: "4 Months",
    overview:
      "Instructors face challenges managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming.",
    audience:
      "Instructors, Academic institutions, and higher education students.",
    challenge:
      "Instructors need an efficient way to track student performance, predict struggles, and offer timely support.",
    solution:
      "A smart dashboard with AI-driven insights, grade prediction analysis, and visualization tools for easy tracking.",
    keyFindings: [
      "Instructors struggle with large class sizes.",
      "Tracking student performance manually is error-prone.",
      "AI can help predict struggling students early.",
    ],
    images: {
      hero: "/teacher-dashboard.png",
      insights: "/insights-chart.png",
      performance: "/performance-chart.png",
      aiAlerts: "/ai-alerts.png",
    },
  },
  {
    title: "Booktopia",
    slug: "booktopia",
    role: "UX Designer",
    duration: "4 Months",
    overview:
      "Instructors face challenges managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming.",
    audience:
      "Instructors, Academic institutions, and higher education students.",
    challenge:
      "Instructors need an efficient way to track student performance, predict struggles, and offer timely support.",
    solution:
      "A smart dashboard with AI-driven insights, grade prediction analysis, and visualization tools for easy tracking.",
    keyFindings: [
      "Instructors struggle with large class sizes.",
      "Tracking student performance manually is error-prone.",
      "AI can help predict struggling students early.",
    ],
    images: {
      hero: "/teacher-dashboard.png",
      insights: "/insights-chart.png",
      performance: "/performance-chart.png",
      aiAlerts: "/ai-alerts.png",
    },
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-[#060A0F] text-black dark:text-white py-20 px-6">
      <div className="">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-center mb-6">{project.title}</h1>
        <p className="text-gray-400 text-center">
          {project.role} • {project.duration}
        </p>
        <Image
          src={project.images.hero}
          alt={project.title}
          width={800}
          height={500}
          className="rounded-lg mx-auto my-6"
        />

        {/* Overview */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p className="text-gray-300 mt-2">{project.overview}</p>
        </section>

        {/* Audience & Challenge */}
        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold">The Audience</h2>
            <p className="text-gray-300 mt-2">{project.audience}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">The Challenge</h2>
            <p className="text-gray-300 mt-2">{project.challenge}</p>
          </div>
        </section>

        {/* Key Findings */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Key Findings</h2>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            {project.keyFindings.map((finding, index) => (
              <li key={index}>{finding}</li>
            ))}
          </ul>
        </section>

        {/* Data Insights & AI Alerts */}
        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold">Performance Metrics</h2>
            <Image
              src={project.images.performance}
              alt="Performance Metrics"
              width={600}
              height={400}
              className="rounded-lg mt-4"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">AI-Driven Alerts</h2>
            <Image
              src={project.images.aiAlerts}
              alt="AI Alerts"
              width={600}
              height={400}
              className="rounded-lg mt-4"
            />
          </div>
        </section>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Link href="/projects" className="text-blue-400 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
