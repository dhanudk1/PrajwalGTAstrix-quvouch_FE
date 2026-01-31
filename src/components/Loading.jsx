const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="flex flex-col items-center">
        
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>

        {/* Text */}
        <p className="text-gray-700 text-lg font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
