import { useState } from "react";
import Top100Container from "../components/Top100/Top100Container";

import UrlDisplay from "../components/UrlDisplay/UrlDisplay";
import UrlFormContainer from "../components/UrlForm/UrlFormContainer";

export default function Home() {
  const [shortURLData, setShortURLData] = useState({});
  return (
    <>
      <h1>CompressURL</h1>
      {shortURLData.hasOwnProperty("short_code") ? (
        <UrlDisplay shortURLData={shortURLData} />
      ) : (
        <UrlFormContainer setShortURLData={setShortURLData} />
      )}
      <Top100Container />
    </>
  );
}
