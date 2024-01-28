import { useState, useEffect } from "react";

// Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState([]);

  // POST refactor
  const [config, setConfig] = useState({});
  const [method, setMethod] = useState("GET");
  const [callFetch, setCallFetch] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  // GET - Fetching API data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const fetchedData = await res.json();
      setData(fetchedData);
    };

    fetchData();
  }, [url, callFetch]);

  //   POST refactor
  useEffect(() => {
    const request = async () => {
      let json;

      if (method === "POST") {
        const res = await fetch(...[url, config]);
        json = await res.json();
      }

      setCallFetch(json);
    };

    request();
  }, [config, method, url]);

  return { data, httpConfig };
};
