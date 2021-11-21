import React from 'react';
import { useParams } from '@reach/router';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Dialog from 'q3-ui-dialog';
import { isFunction } from 'lodash';
import { Builders } from 'q3-ui-forms';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const PoolScore = ({ refresh, week }) => {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <Dialog
      title="submitScore"
      description="submitScore"
      variant="drawer"
      renderContent={(close) => (
        <Builders.Form
          onSubmit={({
            minutes,
            seconds,
            hasProofOfPoints,
            points,
            url,
          }) =>
            axios
              .post(`/score`, {
                duration: minutes * 60 + seconds,
                hasProofOfPoints,
                points,
                url,
                id,
              })
              .then((res) => {
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
          <Builders.Field
            required
            name="points"
            type="number"
            xl={6}
            lg={6}
          />
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
          <Builders.Field
            required
            name="hasProofOfPoints"
            type="checkbox"
            xl={6}
            lg={6}
          />
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

export default PoolScore;
