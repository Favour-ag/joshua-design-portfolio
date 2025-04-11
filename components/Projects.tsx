"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Teacher Dashboard",
    slug: "ai-powered-dashboard",
    role: "UX Designer",
    duration: "4 Months",
    description:
      "Instructors face increasing challenges in managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming and often results in missed opportunities for early intervention.",
    image: "/images/analytics.svg",
    chart: "/images/frame-data.svg",
    theme: "blue",
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
    theme: "cyan",
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
    theme: "amber",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-[#060A0F] text-black dark:text-white">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">My Work</h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link href={`/projects/${project.slug}`}>
                <motion.div // Changed div to motion.div for animation
                  className={`
                    group grid md:grid-cols-12 gap-8 cursor-pointer
                    h-full md:h-[400px] p-6 rounded-xl shadow-xl // Added shadow-xl here
                    border border-gray-200 dark:border-gray-800
                    hover:border-opacity-0 transition-all duration-300
                    hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent
                    ${
                      project.theme === "blue" ? "hover:shadow-blue-500/50" : ""
                    }
                    ${
                      project.theme === "cyan" ? "hover:shadow-cyan-500/50" : ""
                    }
                    ${
                      project.theme === "amber"
                        ? "hover:shadow-amber-500/50"
                        : ""
                    }
                  `}
                  whileHover={{ scale: 1.05 }} // Applied scale to the entire div
                >
                  {/* Left Column - Title and Metadata */}
                  <div className="md:col-span-3 flex flex-col h-full space-y-4">
                    <div
                      className={`
                        p-4 w-full h-1/2 flex items-center
                        border-b
                        ${project.theme === "blue" ? "border-blue-400/20" : ""}
                        ${project.theme === "cyan" ? "border-cyan-400/20" : ""}
                        ${
                          project.theme === "amber" ? "border-amber-400/20" : ""
                        }
                      `}
                    >
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>
                    </div>
                    <div className="p-4 w-full h-1/2 flex flex-col justify-center">
                      <div className="text-gray-500 dark:text-gray-300 text-sm space-y-2">
                        <p className="flex items-center">
                          <span
                            className={`
                              w-2 h-2 rounded-full mr-2
                              ${project.theme === "blue" ? "bg-blue-400" : ""}
                              ${project.theme === "cyan" ? "bg-cyan-400" : ""}
                              ${project.theme === "amber" ? "bg-amber-400" : ""}
                            `}
                          ></span>
                          Role: {project.role}
                        </p>
                        <p className="flex items-center">
                          <span
                            className={`
                              w-2 h-2 rounded-full mr-2
                              ${project.theme === "blue" ? "bg-blue-400" : ""}
                              ${project.theme === "cyan" ? "bg-cyan-400" : ""}
                              ${project.theme === "amber" ? "bg-amber-400" : ""}
                            `}
                          ></span>
                          Duration: {project.duration}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Column - Main Image */}
                  <div className="md:col-span-5 flex items-stretch">
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`
                          object-contain transition-transform duration-500
                          ${
                            project.theme === "blue"
                              ? "group-hover:brightness-110"
                              : ""
                          }
                          ${
                            project.theme === "cyan"
                              ? "group-hover:contrast-110"
                              : ""
                          }
                          ${
                            project.theme === "amber"
                              ? "group-hover:saturate-150"
                              : ""
                          }
                        `}
                      />
                    </div>
                  </div>

                  {/* Right Column - Description and Chart */}
                  <div className="md:col-span-4 flex flex-col justify-between space-y-4">
                    <div
                      className={`
                        p-4 rounded-md h-1/2 w-full
                        ${
                          project.theme === "blue"
                            ? "bg-blue-900/20 border border-blue-400/20"
                            : ""
                        }
                        ${
                          project.theme === "cyan"
                            ? "bg-cyan-900/20 border border-cyan-400/20"
                            : ""
                        }
                        ${
                          project.theme === "amber"
                            ? "bg-amber-900/20 border border-amber-400/20"
                            : ""
                        }
                      `}
                    >
                      <p className="text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>
                    <div className="h-1/2 w-full relative">
                      <Image
                        src={project.chart}
                        alt="Supplementary Visual"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
