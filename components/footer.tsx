import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-6 md:py-8 bg-inherit text-white border">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div>
          <Image
            src="/images/logo_dark.svg"
            alt="Cipher Dashboard"
            width={100}
            height={100}
            className=""
          />
        </div>
        <p className="text-sm md:text-base">Let's Work Together</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base hover:opacity-75 transition-opacity"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base hover:opacity-75 transition-opacity"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base hover:opacity-75 transition-opacity"
          >
            <FaBehance size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
