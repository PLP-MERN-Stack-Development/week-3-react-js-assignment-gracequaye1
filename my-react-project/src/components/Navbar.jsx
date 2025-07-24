import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; //  Import context

function Navbar() {
  const { theme, toggleTheme } = useTheme(); //  Access context

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">PLP Task Manager</h1>
        
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:underline">
            Home
          </Link>
          <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:underline">
            Tasks
          </Link>

          {/*  Dark/Light toggle button */}
          <button
            onClick={toggleTheme}
            className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
