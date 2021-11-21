import React from 'react';
import axios from 'axios';
import { map } from 'lodash';
import { AuthContext } from 'q3-ui-permissions';

export default (job = {}) => {
  const [hasJoined, setHasJoined] = React.useState(false);
  const state = React.useContext(AuthContext);
  const handles = map(job?.competitors, 'handle');
  const handle = state?.state?.profile?.handle;
  const { currentWeek = -1 } = job;

  React.useEffect(() => {
    setHasJoined(
      // we'll treat closed events the same
      handles.includes(handle) || currentWeek === -1,
    );
  }, [handle, handles, currentWeek]);

  return {
    currentWeek,
    hasJoined,

    join: () =>
      axios
        .post(`/registration?pool=${job?.id}`)
        .then(() => {
          setHasJoined(true);
        }),
  };
};
