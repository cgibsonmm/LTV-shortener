import { BACKEND_URL } from "../../services/endpoint";

export default function UrlDisplay({ shortURLData }) {
  const { short_code } = shortURLData;
  const fullURL = `${BACKEND_URL}/${short_code}`;

  return (
    <div className="bg-blue-600 mt-4 mx-2 rounded min-h-20 p-4 flex flex-col items-center justify-center md:w-3/4 md:mx-auto">
      <a
        data-testid="short-code"
        href={fullURL}
        className="font-bold text-gray-100 underline hover:text-blue-100"
      >
        {fullURL}
      </a>
    </div>
  );
}
