import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from '@reach/router';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Dialog from 'q3-ui-dialog';
import { isFunction } from 'lodash';
import { Builders } from 'q3-ui-forms';
import axios from 'axios';
import { useTranslation } from 'q3-ui-locale';

const PoolScore = ({ refresh, week, type }) => {
  const { id } = useParams();
  const { t } = useTranslation();
  const isMinute = type === 'Minutes';

  return (
    <Dialog
      title="submitScore"
      description="submitScore"
      variant="drawer"
      renderContent={(close) => (
        <Builders.Form
          onSubmit={({ cycles, minutes, seconds, url }) =>
            axios
              .post('/score', {
                duration: isMinute
                  ? minutes * 60 + seconds
                  : cycles,
                hasProofOfPoints: true,
                url,
                id,
              })
              .then(() => {
                if (isFunction(refresh)) refresh();
                close();
              })
          }
        >
          <Builders.Field
            required
            name="url"
            type="url"
            xl={12}
            lg={12}
          />
          {isMinute ? (
            <>
              <Builders.Field
                required
                name="minutes"
                type="number"
                xl={6}
                lg={6}
              />
              <Builders.Field
                required
                name="seconds"
                type="number"
                xl={6}
                lg={6}
              />
            </>
          ) : (
            <Builders.Field
              required
              name="cycles"
              type="number"
              xl={12}
              lg={12}
            />
          )}
        </Builders.Form>
      )}
      renderTrigger={(onClick) =>
        week === -1 ? (
          <Alert severity="error">
            {t('descriptions:poolClosed')}
          </Alert>
        ) : (
          <Button
            onClick={onClick}
            color="secondary"
            variant="contained"
          >
            {t('labels:submitScore', {
              week: week + 1,
            })}
          </Button>
        )
      }
    />
  );
};

PoolScore.defaultProps = {
  type: 'Minutes',
  week: -1,
};

PoolScore.propTypes = {
  refresh: PropTypes.func.isRequired,
  type: PropTypes.string,
  week: PropTypes.number,
};

export default PoolScore;
