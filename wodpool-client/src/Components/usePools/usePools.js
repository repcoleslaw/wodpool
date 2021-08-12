import React from "react";
import axios from "axios";
import { AuthenticationContext } from "../AuthenticationContext";

// eslint-disable-next-line
export default () => {
  const auth = React.useContext(AuthenticationContext);
  const [pools, setPools] = React.useState([]);

  const makeCompetitorHandleQueryParams = (joinWith) =>
    ["competitors.handle", joinWith, auth.profile.handle].join("");

  const fetch = (queryParams) =>
    axios.get(['/pools', queryParams].filter(Boolean).join('?')).then(({ data }) => {
      setPools(data?.pools);
    });

  const fetchWithHandle = () => fetch(makeCompetitorHandleQueryParams("="));
  const fetchWithoutHandle = () => fetch(makeCompetitorHandleQueryParams("!="));

  const hasPools = () => (Array.isArray(pools) ? pools.length > 0 : false);

  return {
    fetch,
    fetchWithHandle,
    fetchWithoutHandle,
    hasPools,
    pools,
  };
};
