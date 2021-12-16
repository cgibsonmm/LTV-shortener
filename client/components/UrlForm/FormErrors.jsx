import React from "react";

export default function FormErrors({ errors }) {
  const displayErrors = () => {
    if (errors.length > 0) {
      return (
        <div>
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
