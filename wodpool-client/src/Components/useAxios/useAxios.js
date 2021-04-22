import React from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import { set } from "lodash";
import { NONCE, TOKEN } from "../AuthenticationContext";

const getAuthenticationHeadersFromCookies = (config) => {
  set(config, "headers.common.Authorization", `Bearer ${Cookies.get(TOKEN)}`);
  set(config, `headers.common.${NONCE}`, Cookies.get(NONCE));
  return config;
};

/**
 * The only intent for this hook is to config axios defaults for all subsequent calls.
 * In this case, just the API path and the headers. Everything else can be done per request.
 */
const useAxios = () => {
  React.useLayoutEffect(() => {
    Axios.defaults.baseURL = process.env.REACT_APP_API;
    Axios.interceptors.request.use(getAuthenticationHeadersFromCookies);
  }, []);
};

export default useAxios;
