const BASE_URL = process.env.BACKEND_URL || "http://localhost:3000";

export default function UrlDisplay({ shortURLData }) {
  const { short_code } = shortURLData;
  const fullURL = `${BASE_URL}/${short_code}`;
  return (
    <a data-testid="short-code" href={fullURL}>
      {fullURL}
    </a>
  );
}
