import React, { useState } from "react";
import { FaMoon, FaSun, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Login.css"; // Import the CSS file for the background

function Login() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${isDarkMode ? "night" : "day"} background`}>
      <div className="min-h-screen flex items-center justify-center transition duration-500">
        {isDarkMode && (
          <>
            <div className="moon"></div>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              ></div>
            ))}
            <div
              className="shooting-star"
              style={{ top: "20%", left: "40%" }}
            ></div>
            <div
              className="shooting-star"
              style={{ top: "30%", left: "60%" }}
            ></div>
          </>
        )}
        {!isDarkMode && (
          <>
            <div className="sun"></div>
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
          </>
        )}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md ${
            isDarkMode ? "dark-mode-form" : ""
          }`}
        >
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 transition duration-500">
              Login
            </h2>
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-800 dark:text-gray-100 transition duration-500 focus:outline-none"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 mb-2 transition duration-500"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 dark:text-gray-300 mb-2 transition duration-500"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-500"
                placeholder="Enter your password"
              />
              <motion.button
                type="button"
                className="absolute right-3 top-9 text-gray-700 dark:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </motion.button>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 dark:text-blue-500 transition duration-500"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300 transition duration-500">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline transition duration-500"
              >
                Forgot password?
              </a>
            </div>
            <motion.button
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </form>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300 transition duration-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline transition duration-500"
            >
              Sign up
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
