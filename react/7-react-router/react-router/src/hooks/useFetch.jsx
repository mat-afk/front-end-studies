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

  // Error handling
  const [error, setError] = useState(null);

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
      // Error handling
      try {
        setLoading(true);

        const res = await fetch(url);
        const fetchedData = await res.json();

        setData(fetchedData);
      } catch (error) {
        setError("There was an error fetching the data.");
      }

      setLoading(false);
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

  return { data, httpConfig, loading, error };
};
