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
        pattern="https?://.+"
      />
      <button data-testid="submit-btn" disabled={!urlInput}>
        Compress
      </button>
    </form>
  );
}
