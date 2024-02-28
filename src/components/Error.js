import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Ooops ! Something Went Wrong ! ! !</h1>
      <h3>
        {err.status} {err.statusText} {err.data}
      </h3>
    </div>
  );
};

export default Error;
