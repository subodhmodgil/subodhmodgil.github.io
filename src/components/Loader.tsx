import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-600 rounded animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-4 h-4 bg-teal-600 rounded animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-4 h-4 bg-orange-500 rounded animate-bounce" style={{ animationDelay: '300ms' }}></div>
        <div className="w-4 h-4 bg-blue-600 rounded animate-bounce" style={{ animationDelay: '450ms' }}></div>
      </div>
    </div>
  );
};

export default Loader;