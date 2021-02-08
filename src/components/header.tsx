import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { LOCALSTORAGE_TOKEN } from "../constants";
import { useMe } from "../hooks/useMe";
import nuberLogo from "../images/logo.svg";

export const Header: React.FC = () => {
  const { data } = useMe();
  const isToken = Boolean(localStorage.getItem(LOCALSTORAGE_TOKEN));

  const logout = () => {
    if (isToken) {
      localStorage.removeItem(LOCALSTORAGE_TOKEN);
    }
  };

  return (
    <>
      {!data?.me.verified && (
        <div className="bg-red-500 p-3 text-center text-base text-white">
          <span>Please verify your email.</span>
        </div>
      )}

      <header className="py-4">
        <div className="w-full px-5 xl:px-0 max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={nuberLogo} className="w-44" alt="Nuber Eats" />
          </Link>
          <div>
            <Link to="/edit-profile">
              <span className="text-xs">
                <FontAwesomeIcon icon={faUser} className="text-3xl" />
              </span>
            </Link>
            {isToken && (
              <Link to="/logout">
                <span
                  className="ml-5 text-red-600 focus:outline-none"
                  onClick={logout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="text-3xl" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
