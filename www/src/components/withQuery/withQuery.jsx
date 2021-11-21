import React from 'react';
import { Redirect, useLocation } from '@reach/router';

export default (Component, defaultQuery) => (props) => {
  const { search, state } = useLocation();

  if (String(search).startsWith('?') || state?.init)
    return React.useMemo(
      () => React.createElement(Component, props),
      [search],
    );

  return React.createElement(Redirect, {
    to: defaultQuery,
    noThrow: true,
    state: {
      init: true,
    },
  });
};
