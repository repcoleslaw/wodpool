import React from 'react';
import axios from 'axios';
import { map } from 'lodash';
import { AuthContext } from 'q3-ui-permissions';

export default (job = {}, refresh) => {
  const state = React.useContext(AuthContext);
  const handles = map(job?.competitors, 'handle');
  const handle = state?.state?.profile?.handle;
  const { currentWeek = -1 } = job;

  return {
    currentWeek,

    hasJoined:
      handles.includes(handle) || currentWeek === -1,

    join: () =>
      axios
        .post(`/registration?pool=${job?.id}`)
        .then(refresh),
  };
};
