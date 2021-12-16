import { useState } from "react";
import { post } from "../../services/axios";

export default function UrlInput() {
  const [urlInput, setUrlInput] = useState("");
  const [shortURLData, setShortURLData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const res = await fetch("https://localhost:3000/short_urls", {
    //   method: "POST",
    // });
    const payload = { full_url: urlInput };
    const res = await post(payload);
    setShortURLData(res);
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
        />
        <button data-testid="submit-btn">Compress</button>
      </form>
      <div data-testid="short-code">Short URL: {shortURLData?.short_code}</div>
    </>
  );
}
