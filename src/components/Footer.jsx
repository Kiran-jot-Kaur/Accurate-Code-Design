import { NavLink } from "react-router-dom";
import whiteLogo from "../assets/whiteLogo.svg";
const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center text-left gap-0.5">
              <img src={whiteLogo} alt="ACD Logo" className="h-16 w-auto" />
              <div>
                <h2 className="text-xl font-bold tracking-wide text-white">ACD</h2>
                <p className="mt-1 text-xs tracking-widest text-gray-400">
                  ACCURATE CODE & DESIGN
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              AI-powered frontend and UI engineering training focused on real
              product experience.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <NavLink to="/" className="hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="hover:text-white">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/internship" className="hover:text-white">
                  Internship
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="hover:text-white">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Programs
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Frontend & UI Foundations</li>
              <li>AI-Powered Frontend Engineer</li>
              <li>AI Full Frontend + Backend</li>
              <li>Internship Program</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Mohali, Punjab, India</li>
              <li>📧 info@acdtech.in</li>
              <li>📞 +91 XXXXXXXXXX</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ACD Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
