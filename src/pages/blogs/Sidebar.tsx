import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-700 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow duration-300 font-mono"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m-3.65-3.65A7 7 0 1014 7a7 7 0 003.65 5.65z"
            />
          </svg>
        </button>
      </div>

      {/* Recent Posts Section */}
      <div>
        <h2 className="text-xl font-fira-code font-bold mb-4 text-gray-100">
          Recent Posts
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className="text-green-400 hover:underline hover:text-green-500 transition-colors duration-300"
            >
              The scalability concerns facing blockchain technology
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-green-400 hover:underline hover:text-green-500 transition-colors duration-300"
            >
              The role of NFTs in blockchain technology
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-green-400 hover:underline hover:text-green-500 transition-colors duration-300"
            >
              An overview of popular blockchain platforms
            </a>
          </li>
        </ul>
      </div>

      {/* Recent Comments Section */}
      <div>
        <h2 className="text-xl font-fira-code font-bold mb-4 text-gray-100">
          Recent Comments
        </h2>
        <p className="text-gray-500 font-mono">No comments to show.</p>
      </div>

      {/* Archives Section */}
      <div>
        <h2 className="text-xl font-fira-code font-bold mb-4 text-gray-100">
          Archives
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className="text-green-400 hover:underline hover:text-green-500 transition-colors duration-300"
            >
              January 2023
            </a>
          </li>
        </ul>
      </div>

      {/* Categories Section */}
      <div>
        <h2 className="text-xl font-fira-code font-bold mb-4 text-gray-100">
          Categories
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className="text-green-400 hover:underline hover:text-green-500 transition-colors duration-300"
            >
              Blockchain Applications
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-green-400 hover:underline hover:text-green-500 transition-colors duration-300"
            >
              Consensus Protocols
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
