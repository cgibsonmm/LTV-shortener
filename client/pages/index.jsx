import { useState, useEffect } from "react";
import Top100Container from "../components/Top100/Top100Container";

import UrlDisplay from "../components/UrlDisplay/UrlDisplay";
import UrlFormContainer from "../components/UrlForm/UrlFormContainer";

export default function Home({ reloadToggle }) {
  const [shortURLData, setShortURLData] = useState({});

  useEffect(() => {
    setShortURLData({});
  }, [reloadToggle]);

  return (
    <>
      {shortURLData.hasOwnProperty("short_code") ? (
        <UrlDisplay shortURLData={shortURLData} />
      ) : (
        <UrlFormContainer setShortURLData={setShortURLData} />
      )}
      {/* Passing down state to take advantage of useEffect dependency to query db */}
      <Top100Container shortURLData={shortURLData} />
    </>
  );
}
