"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaLinkedin,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className={`
        fixed bottom-0 left-0 z-50 w-full bg-white text-black dark:bg-[#080E14] dark:text-white
        flex justify-around items-center py-4 md:relative md:ml-4 md:mt-22 md:h-[90vh] md:w-20
        md:flex-col md:items-center md:justify-between md:rounded-full md:py-8 md:shadow-xl
        transition
      `}
    >
      {/* <h2 className="text-black dark:text-white text-md font-bold md:block hidden">JOSHUA</h2> */}

      {/* Navigation Links */}
      <div className="flex md:flex-col">
        <NavItem
          href="/"
          icon={<FaHome />}
          label="Home"
          active={pathname === "/"}
        />
        <NavItem
          href="/about"
          icon={<FaUser />}
          label="About"
          active={pathname === "/about"}
        />
        <NavItem
          href="/contact"
          icon={<FaEnvelope />}
          label="Say Hi"
          active={pathname === "/contact"}
        />
        <NavItem
          href="/projects"
          icon={<FaBriefcase />}
          label="My Work"
          active={pathname === "/projects"}
        />
      </div>

      {/* Social Media Icons (Shown on mobile, at the bottom on desktop) */}
      <div className="flex gap-5 md:flex-col md:py-6">
        <SocialLink
          href="https://linkedin.com/in/yourprofile"
          icon={<FaLinkedin />}
        />
        <SocialLink
          href="https://instagram.com/yourprofile"
          icon={<FaInstagram />}
        />
        <SocialLink
          href="https://behance.net/yourprofile"
          icon={<FaBehance />}
        />
      </div>
    </aside>
  );
};

// Component for Navigation Links
const NavItem = ({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`
        flex flex-col items-center gap-1 p-3 transition
        ${
          active
            ? "text-blue-400"
            : "text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
        }
        md:flex-col // Ensure column layout on desktop
      `}
    >
      <div className="text-2xl">{icon}</div>
      <span className="text-xs md:block hidden">{label}</span>{" "}
      {/* Hide label on mobile */}
    </Link>
  );
};

// Component for Social Media Links
const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-black dark:text-white text-2xl hover:text-blue-500 dark:hover:text-blue-300 transition"
    >
      {icon}
    </Link>
  );
};

export default Sidebar;
