import { useState, useEffect } from "react";
import { fetchTop100 } from "../../services/axios/get";
import Top100List from "./Top100List";

export default function Top100Container() {
  const [top100, setTop100] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchTop100();
      setTop100(res);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2
        data-testid="top-100-heading"
        className="mt-4 text-xl font-bold border-b-4 border-blue-400 text-gray-900"
      >
        Top 100
      </h2>
      <Top100List top100={top100} />
    </div>
  );
}
