import { useState, useEffect } from "react";

// Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState([]);

  // POST refactor
  const [config, setConfig] = useState({});
  const [method, setMethod] = useState("GET");
  const [callFetch, setCallFetch] = useState(null);

  // Loading
  const [loading, setLoading] = useState(false);

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
      setLoading(true);

      const res = await fetch(url);
      const fetchedData = await res.json();

      setLoading(false);

      setData(fetchedData);
    };

    fetchData();
  }, [url, callFetch]);

  //   POST refactor
  useEffect(() => {
    const request = async () => {
      let json;

      if (method === "POST") {
        setLoading(true);

        const res = await fetch(...[url, config]);
        json = await res.json();

        setLoading(false);
      }

      setCallFetch(json);
    };

    request();
  }, [config, method, url]);

  return { data, httpConfig, loading };
};
