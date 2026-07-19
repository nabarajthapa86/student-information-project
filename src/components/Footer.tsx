import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
 
} from "react-icons/fa";



// Each entry is one icon in the "Follow Us" row.
// href: the real destination - replace every "#" below with your actual
//       Facebook page, YouTube channel, X/Twitter profile, LinkedIn page,
//       Play Store listing, and App Store listing.
interface SocialLink {
  label: string;
  href: string;
  Icon: IconType;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com/Aadikav-Bhanubhakta-Campus", Icon: FaFacebookF },
  { label: "YouTube", href: "https://youtube.com/@aadikavibhanubhaktacampus2503", Icon: FaYoutube },
  { label: "Twitter", href: "https://twitter.com/@aadikavicampus", Icon: FaTwitter },
  { label: "LinkedIn", href: "https://linkedin.com/company/Aadikavi-Bhanubhakta-Campus", Icon: FaLinkedinIn },
];

export default function Footer() {
  return (
    // This is the scroll target for the "Contact Us" nav link.
    <footer id="contact" className="scroll-mt-20 bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Aadikavi Bhanubhakta Campus logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-bold text-white">
              Aadikavi Bhanubhakta Campus
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
            Committed to fostering academic excellence and professional
            integrity since 1987.
          </p>

         
          
        </div>

        {/* Resources column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Follow us
          </h3>
          <ul className="mt-4 space-y-3">
             {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-blue-700 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </ul>
        </div>
        

        {/* Contact column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#0E76BD]" />
              <span>Vyas-1, Damauli, Tanahun, Gandaki Province, Nepal</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-[#0E76BD]" />
              <span>065-590096</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-[#0E76BD]" />
              <span>abcampus@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2024 Aadikavi Bhanubhakta Campus. All rights reserved.</p>
          <Link href="/students" className="hover:text-gray-300">
            Student List
          </Link>
        </div>
      </div>
    </footer>
  );
}