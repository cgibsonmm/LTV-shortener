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
    <div>
      <h2 data-testid="top-100-heading">Top 100</h2>
      <Top100List top100={top100} />
    </div>
  );
}
