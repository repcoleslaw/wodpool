import React from 'react';
import PropTypes from 'prop-types';
import { Gatekeeper } from 'q3-admin/lib/containers';
import IsBrowserReady from 'gatsby-theme-q3/src/components/IsBrowserReady';
import { get } from 'lodash';

const AppWrapper = ({ children }) => (
  <IsBrowserReady>
    <Gatekeeper
      redirectPathOnPublic="/login"
      redirectCheck={(e) =>
        get(e, 'role') !== 'Administrator'
          ? '/login'
          : undefined
      }
    >
      {children}
    </Gatekeeper>
  </IsBrowserReady>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
