// // components/Footer.jsx
// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-gray-200 p-4 text-center">
//       <p>&copy; 2025 ProjectPulse. All rights reserved.</p>
//     </footer>
//   );
// }
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/images/logo-white-CyDn9rGY.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-900 py-10 px-6 mx-4 rounded-xl text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo.src} className="w-12 h-12 mb-2" alt="ProjectPulse" />
          <h3 className="text-lg font-bold">ProjectPulse</h3>

          <ul className="space-y-2 mt-4">
            <li><Link href="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-200">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-200">Contact Us</Link></li>
          </ul>
        </div>

        {/* Product */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><Link href="/app/projects" className="hover:text-blue-200">Projects</Link></li>
            <li><Link href="/app/checkins" className="hover:text-blue-200">Check-ins</Link></li>
            <li><Link href="/app/risks" className="hover:text-blue-200">Risks</Link></li>
            <li><Link href="/login" className="hover:text-blue-200">Login</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>

          <div className="flex gap-4 mb-3">
            <FaFacebook size={22} />
            <FaXTwitter size={22} />
            <FaInstagram size={22} />
          </div>

          <a
            href="mailto:projectpulse@gmail.com"
            className="flex items-center hover:text-blue-200"
          >
            <Mail size={18} className="mr-2" />
            projectpulse@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-300/40 mt-8 pt-4 text-center text-sm">
        <p>© {year} ProjectPulse. All rights reserved.</p>
        <p className="mt-2">
          <Link href="/privacy" className="hover:text-blue-200 mr-3">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-200">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}
