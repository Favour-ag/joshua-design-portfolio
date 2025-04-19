"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const text =
  "As an instructor, managing student performance feels overwhelming at times. Manually tracking grades, attendance, and participation across large classes is exhausting, and I worry that I’m missing critical opportunities to identify and support students who are struggling.";

export default function AiDashboardPage() {
  return (
    <main className="bg-white dark:bg-[#060A0F] text-black dark:text-white font-sans min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-3xl md:text-5xl font-bold text-center mb-10">
          AI-Powered Teacher Dashboard
        </p>

        <div>
          <motion.p
            className=" font-bold flex flex-wrap justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
        </div>
        {/* Project Overview */}
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-300 mb-4">
          Higher education instructors face increasing challenges in managing
          student performance across large classes...
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li>Identify at-risk students early.</li>
          <li>Save time with automated analysis.</li>
          <li>Take actionable steps to improve student success.</li>
        </ul>

        <div className="my-6">
          <Image
            src="/images/classroom.png"
            alt="Classroom"
            width={1000}
            height={600}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Audience and Challenge */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-2">The Audience</h3>
            <p className="text-gray-400 text-sm">
              <strong>Primary Users:</strong> Professors, Lecturers, Academic
              Admins.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <strong>User Goals:</strong> Predict risk, monitor performance,
              and act on AI-driven suggestions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">The Challenge</h3>
            <p className="text-gray-400 text-sm">
              Instructors struggled to identify struggling students early,
              leading to missed intervention opportunities...
            </p>
          </div>
        </div>

        {/* Understanding the Instructor’s World */}
        <h2 className="text-2xl font-semibold mb-4">
          Understanding the Instructor’s World
        </h2>
        <p className="text-gray-300 mb-6">
          We began with curiosity and empathy, interviewing educators and
          analyzing their workflows...
        </p>

        {/* Quote Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="bg-yellow-400 text-black p-4 rounded-md text-sm font-medium"
            >
              "I spent hours manually analyzing grades every semester..."
            </div>
          ))}
        </div>

        {/* Key Findings */}
        <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
        <p className="text-gray-300 mb-6">
          Instructors felt overwhelmed with manual grade tracking, lacked
          predictive tools, and wanted actionable insights...
        </p>

        {/* Problem */}
        <h2 className="text-2xl font-semibold mb-4">Pinpointing the Problem</h2>
        <p className="text-gray-300 mb-6">
          Instructors need a dashboard to predict student progress, identify
          risks, and offer interventions in time.
        </p>

        {/* Dreaming the Solution */}
        <h2 className="text-2xl font-semibold mb-4">
          Dreaming Up the Solution
        </h2>
        <p className="text-gray-300 mb-6">
          We envisioned a dashboard powered by AI, focused on professor
          needs—not just another data grid.
        </p>

        {/* Charts and Metrics */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Prediction Analytics</h3>
            <Image
              src="/images/grade-predict.svg"
              alt="Prediction Analytics"
              width={600}
              height={300}
              className="rounded-md object-contain w-full"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Progress Trends</h3>
            <Image
              src="/images/performance-metrics.svg"
              alt="Progress Trends"
              width={600}
              height={300}
              className="rounded-md object-contain w-full"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">AI Recommendations</h3>
            <Image
              src="/images/ai-recommend.svg"
              alt="AI Recommendations"
              width={600}
              height={300}
              className="rounded-md object-contain w-full"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Focused Alerts</h3>
            <Image
              src="/images/focused-alert.svg"
              alt="Focused Alerts"
              width={600}
              height={300}
              className="rounded-md object-contain w-full"
            />
          </div>
        </div>

        {/* Final Wrap-up */}
        <h2 className="text-2xl font-semibold mb-4">
          Turning Ideas into an Intuitive Solution
        </h2>
        <p className="text-gray-300">
          We started with wireframes, iterated on functionality, tested user
          feedback, and enhanced clarity. The final prototype empowered
          professors to make better data-driven decisions.
        </p>
      </div>
      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full bottom-1/3 right-1/3 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/3 right-1/4 animate-pulse"></div>
      </div>
    </main>
  );
}
