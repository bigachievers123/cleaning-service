import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-600">
          🧹 CleanPro
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-teal-600 transition-colors">
              Services
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-teal-600 transition-colors">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Authentication Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/login"
            className="border border-teal-600 text-teal-600 px-5 py-2 rounded-lg hover:bg-teal-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-slate-700"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;