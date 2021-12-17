import { useState } from "react";

export default function FormInput({ handleSubmit }) {
  const [urlInput, setUrlInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, urlInput);
        setUrlInput("");
      }}
      className="flex w-full items-center"
    >
      <div className="flex items-center w-full">
        <label htmlFor="url-input" className="text-xl text-gray-100">
          URL
        </label>
        <input
          className="h-10 rounded rounded-r-none ml-4 w-full px-4 bg-gray-50 "
          id="url-input"
          data-testid="form-input"
          type="url"
          value={urlInput}
          placeholder="Enter your URL"
          onChange={(e) => setUrlInput(e.target.value)}

          // Disabled due to requirements I would normally add check
          // so I can never submit the request without it being a valid URL
          // pattern="https?://.+"
        />
      </div>
      <button
        className="h-10 bg-blue-200 rounded rounded-l-none px-4 text-xl text-gray-900 hover:bg-blue-300 hover:text-gray-700"
        data-testid="submit-btn"

        // See above
        // disabled={!urlInput}
      >
        Compress
      </button>
    </form>
  );
}
