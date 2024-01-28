import { useState, useEffect } from "react";

// Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const fetchedData = await res.json();
      setData(fetchedData);
    };

    fetchData();
  }, [url]);

  return { data };
};
