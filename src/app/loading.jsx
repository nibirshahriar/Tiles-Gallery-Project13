const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] px-4">
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-gray-200 border-t-[#2A3C50] rounded-full animate-spin"></div>

        <div className="absolute w-10 h-10 bg-[#2A3C50] rounded-full opacity-10 animate-ping"></div>
      </div>

      {/* Text */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Loading Tiles...</h2>

        <p className="text-gray-500 mt-2">
          Please wait while we prepare your premium collection.
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
