import React from "react";

const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen w-full">
    <span
      className="inline-block w-16 h-16 rounded-full border-4 border-blue-500 border-t-purple-500 border-b-green-500 animate-spin shadow-lg dark:border-blue-400 dark:border-t-purple-400 dark:border-b-green-400"
      aria-label="Loading"
    />
    <span className="mt-6 text-lg font-semibold text-blue-600 dark:text-blue-300 tracking-wide">
      Loading...
    </span>
  </div>
);

export default Loader; 