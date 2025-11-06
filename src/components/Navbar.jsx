import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="px-6 py-4 flex justify-between items-center bg-blue-600 dark:bg-gray-800 text-white">
      <h1 className="text-xl font-bold">React + Tailwind App</h1>

      <div className="flex items-center space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>

        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-lg bg-white text-blue-600 dark:bg-yellow-500 dark:text-gray-900 transition font-medium"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
}
