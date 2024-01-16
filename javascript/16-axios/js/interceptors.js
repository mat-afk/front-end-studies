// Request
axiosFetch.interceptors.request.use(
  function (config) {
    console.log("Before request...");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response
axiosFetch.interceptors.response.use(
  function (response) {
    console.log("Before response...");
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
