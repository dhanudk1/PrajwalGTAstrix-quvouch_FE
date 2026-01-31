import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        
        {/* Icon / Code */}
        <h1 className="text-7xl font-extrabold text-red-500 mb-4">
          401
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Unauthorized Access
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-8">
          Sorry, you don’t have permission to view this page.
          Please login with the correct account or go back.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate(ROUTES.LOGIN)}
            className="px-6 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
