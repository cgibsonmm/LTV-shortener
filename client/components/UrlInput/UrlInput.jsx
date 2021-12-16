import { useState } from "react";

export default function UrlInput() {
  const [urlInput, setUrlInput] = useState("");

  return (
    <form>
      <label>URL</label>
      <input
        data-testid="form-input"
        type="url"
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}
      />
    </form>
  );
}
