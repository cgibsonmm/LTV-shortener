import { useState, useEffect } from "react";
import { post } from "../../services/axios";

export default function UrlInput() {
  const [urlInput, setUrlInput] = useState("");
  const [shortURLData, setShortURLData] = useState({});
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { full_url: urlInput };
    const res = await post(payload);
    if (res.errors) {
      setErrors(res.errors);
    } else {
      setShortURLData(res);
    }
  };

  const displayErrors = () => {
    if (errors.length > 0) {
      return (
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
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
      {displayErrors()}
      <div data-testid="short-code">Short URL: {shortURLData?.short_code}</div>
    </>
  );
}
