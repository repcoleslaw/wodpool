import React from 'react';
import { Builders } from 'q3-ui-forms';
import Alert from '@material-ui/lab/Alert';
import { Grid } from '@material-ui/core';
import {
  SubDetail,
  connect,
} from 'q3-admin/lib/containers';
import { forEach, size } from 'lodash';

export const getDynamicWeeklyValues = ({ events = [] }) =>
  forEach(events, (xs, i) =>
    Object.assign(xs, {
      sizeOfExercises: size(xs.exercises),
      week: `Week #${String(i + 1)}`,
    }),
  );

const DisplayType = connect(({ data: { type } }) => (
  <Grid item xs={12}>
    <Alert severity="info">
      Note that this pool has been set to a duration type of
      <strong> {type}</strong>. You can change this under
      its general settings.
    </Alert>
  </Grid>
));

const PoolsExercises = (props) => (
  <SubDetail
    th="week"
    root="events"
    cardProps={{
      title: 'week',
      describe: 'equipment',
      attributes: ['duration', 'url', 'sizeOfExercises'],
      editable: {},
    }}
    decorators={{
      get: getDynamicWeeklyValues,
    }}
    {...props}
  >
    <Builders.Form>
      <DisplayType />
      <Builders.Field
        required
        name="duration"
        type="number"
        xl={6}
        lg={6}
      />
      <Builders.Field name="url" type="url" xl={6} lg={6} />
      <Builders.Field
        name="equipment"
        type="text"
        multiline
        rows={3}
        required
        xl={12}
        lg={12}
      />
      <Builders.Repeater group="exercises">
        <Builders.Field
          name="name"
          type="text"
          required
          xl={12}
          lg={12}
        />
        <Builders.Field
          name="reps"
          type="number"
          xl={12}
          lg={12}
        />
        <Builders.Field
          name="description"
          type="text"
          required
          multiline
          rows={3}
          xl={12}
          lg={12}
        />
      </Builders.Repeater>
    </Builders.Form>
  </SubDetail>
);

export default PoolsExercises;
