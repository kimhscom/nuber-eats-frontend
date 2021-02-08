import React from "react";
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";

export const Logout = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Helmet>
        <title>Logout | Nuber Eats</title>
      </Helmet>
      <h2 className="font-semibold text-2xl mb-3">Logout</h2>
      <h4 className="font-medium text-base mb-5">
        You are successfully logged out.
      </h4>
      <span
        className="text-lime-600 hover:underline cursor-pointer"
        onClick={goToLogin}
      >
        Go to login page &rarr;
      </span>
    </div>
  );
};
