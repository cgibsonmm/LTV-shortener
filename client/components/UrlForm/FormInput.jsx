import { useState } from "react";

export default function FormInput({ handleSubmit }) {
  const [urlInput, setUrlInput] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e, urlInput)}>
      <label htmlFor="url-input">URL</label>
      <input
        id="url-input"
        data-testid="form-input"
        type="url"
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}

        // Disabled due to requirements I would normally add check
        // so I can never submit the request without it being a valid URL
        // pattern="https?://.+"
      />
      <button
        data-testid="submit-btn"

        // See above
        // disabled={!urlInput}
      >
        Compress
      </button>
    </form>
  );
}
