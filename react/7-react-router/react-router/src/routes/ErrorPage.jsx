import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <h3>
        {error.status} - {error.statusText}
      </h3>
      <p>{error.error.message}</p>
    </div>
  );
};

export default ErrorPage;
