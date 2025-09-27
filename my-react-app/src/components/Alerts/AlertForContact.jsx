import React from "react";

const AlertForContact = ({ type = "success", message, onClose }) => {
  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose} // closes when you click outside
      ></div>

      {/* Alert Box */}
      <div
        className={`relative z-10 w-[90%] max-w-md p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 bg-white`}
      >
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            {isSuccess ? (
              <svg
                className="w-8 h-8 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 
                  0 00-1.414-1.414L9 10.586 7.707 
                  9.293a1 1 0 00-1.414 1.414l2 2a1 1 
                  0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-6.293-3.707a1 1 
                  0 00-1.414 1.414L10.586 10l-2.293 
                  2.293a1 1 0 101.414 1.414L12 
                  11.414l2.293 2.293a1 1 0 
                  001.414-1.414L13.414 10l2.293-2.293a1 1 
                  0 00-1.414-1.414L12 8.586l-2.293-2.293z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          <div className="text-center">
            <p
              className={`font-semibold text-lg ${
                isSuccess ? "text-green-800" : "text-red-800"
              }`}
            >
              {isSuccess ? "Success" : "Error"}
            </p>
            <p
              className={`mt-1 ${
                isSuccess ? "text-green-700" : "text-red-700"
              }`}
            >
              {message}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertForContact;
