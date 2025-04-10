"use client";

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
      className={`border ml-4 mt-22 flex flex-col items-center justify-between h-[90vh] w-20 
      bg-white text-black dark:bg-[#080E14] dark:text-white rounded-full py-8 shadow-xl transition`}
    >
      <div className="absolute z-50 top-2">
        <p>Joshua Okoh</p>
      </div>
      {/* <h2 className="text-black dark:text-white text-md font-bold">JOSHUA</h2> */}

      {/* Navigation Links */}
      <div className="flex flex-col">
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

      {/* Social Media Icons at Bottom */}
      <div className="flex flex-col gap-5 py-6">
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
      className={`flex flex-col items-center gap-1 p-3 transition 
        ${
          active
            ? "text-blue-400"
            : "text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
        }`}
    >
      <div className="text-2xl">{icon}</div>
      <span className="text-xs">{label}</span>
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
