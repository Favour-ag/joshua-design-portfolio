"use client";

import Image from "next/image";

export default function CipherPage() {
  return (
    <main className="bg-white dark:bg-[#060A0F] text-black dark:text-white font-sans min-h-screen px-4 py-12 ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Cipher (Propfirm Trading Platform)
        </h1>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-300 mb-3">
            Cipher is a proprietary trading platform designed to help traders
            monitor, analyze, and execute trades with powerful tools and
            streamlined dashboards. Built for professional prop traders, Cipher
            emphasizes speed, accuracy, and deep analytical insights.
          </p>
          <p className="text-gray-300">
            This case study explores how we built Cipher from ideation to a
            fully functional prop trading platform by collaborating closely with
            actual traders and firm owners.
          </p>
        </section>

        {/* Image Preview */}
        <div className="mb-10">
          <Image
            src="/images/cipher-dashboard.jpg"
            alt="Cipher Dashboard"
            width={1000}
            height={500}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Audience & Challenge */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-2">The Audience</h3>
            <p className="text-gray-400 text-sm">
              <strong>Primary Users:</strong> Prop traders, mentors, risk
              managers.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <strong>Goals:</strong> Execute trades quickly, stay within risk
              parameters, and improve consistency.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">The Challenge</h3>
            <ul className="text-gray-400 list-disc list-inside text-sm">
              <li>Traders often rely on fragmented tools.</li>
              <li>Risk control is either manual or external.</li>
              <li>No unified dashboard tailored to prop firm needs.</li>
              <li>Traders want speed without sacrificing insight.</li>
            </ul>
          </div>
        </section>

        {/* User Quotes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            What We Heard from Users
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "“Give me all my stats in one place.”",
              "“Risk controls need to be built-in, not added later.”",
              "“If it’s not fast, it’s not usable.”",
              "“I want clarity mid-trade.”",
              "“Don’t clutter my screen.”",
            ].map((quote, index) => (
              <div
                key={index}
                className="bg-white text-black p-4 rounded-md text-sm font-medium"
              >
                {quote}
              </div>
            ))}
          </div>
        </section>

        {/* Key Findings */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
          <p className="text-gray-300">
            Traders want tools that are hyper-responsive, easy to configure, and
            provide real-time data with zero lag. Insights need to be
            actionable—not passive dashboards.
          </p>
        </section>

        {/* Circular Insight Highlight */}
        <div className="flex justify-center mb-10">
          <div className="w-40 h-40 border-2 border-teal-400 rounded-full flex items-center justify-center text-center text-sm font-bold text-teal-400">
            ACTIONABLE
            <br />
            INFORMATION
            <br />
            ONLY
          </div>
        </div>

        {/* What Traders Truly Value */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Understanding What Traders Truly Value
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
            <li>Speed and responsiveness across the UI.</li>
            <li>One-glance dashboards showing risk exposure.</li>
            <li>Smart alerts when risk thresholds are crossed.</li>
            <li>Seamless mobile + desktop compatibility.</li>
            <li>Simple UI to prevent overload in high-stress moments.</li>
          </ul>
        </section>

        {/* User-Centered Validation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Refining Cipher Through User-Centered Validation
          </h2>
          <p className="text-gray-300 text-sm">
            We conducted multiple feedback loops with active prop firm traders,
            testing prototype dashboards and iterating quickly. Every feature
            was added based on friction or insights shared by actual users.
          </p>
        </section>

        {/* Testing */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            How Testing Transformed Cipher
          </h2>
          <p className="text-gray-300 text-sm">
            Several original assumptions were proven wrong. Traders don’t want
            granular customization—they want smart defaults with optional
            tweaks. Data needs to be shown in patterns, not raw values.
          </p>
        </section>

        {/* Digital Ecosystem */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Crafting Cipher’s Digital Ecosystem
          </h2>
          <p className="text-gray-300 text-sm">
            We built Cipher as a cloud-based system with authentication, session
            storage, trade monitoring modules, and real-time push alerts.
            React.js with WebSockets ensured real-time interactivity, while the
            backend used Node.js and PostgreSQL for performance.
          </p>
        </section>

        {/* Transformation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            The Cipher Transformation
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
            <li>
              Unified dashboards with tiered access for firms and traders.
            </li>
            <li>Built-in risk triggers and smart alerts.</li>
            <li>Trade review replay mode for post-mortem sessions.</li>
            <li>Dark mode + low-lag interface for peak usability.</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            The Voice of Our Users
          </h2>
          <blockquote className="italic text-gray-400 text-sm border-l-4 border-teal-400 pl-4">
            “Cipher has changed the way I trade. I no longer use five tools to
            track my day—I just use this.”
          </blockquote>
          <p className="text-right text-teal-400 text-sm mt-2">
            – Lead Trader, New York
          </p>
        </section>

        {/* Final Insight */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Navigating Real-World Constraints
          </h2>
          <p className="text-gray-300 text-sm">
            Building for traders means understanding their pace, needs, and
            zero-tolerance for fluff. With Cipher, we proved that clean design,
            practical features, and feedback loops create real value in
            high-stakes digital environments.
          </p>
        </section>
      </div>
    </main>
  );
}
