import React from "react";

export default function FormErrors({ errors }) {
  const displayErrors = () => {
    if (errors.length > 0) {
      return (
        <div className="flex w-full ml-[25%] md:ml-[12%] mt-2">
          <h4 className="text-red-500 text-xl mr-4">Errors:</h4>
          <ul>
            {errors.map((error, index) => (
              <li
                className="text-red-500"
                data-testid="error"
                key={`error-${index}`}
              >
                {error}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return <>{displayErrors()}</>;
}
