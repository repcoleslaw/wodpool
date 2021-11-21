import React from 'react';
import { Builders } from 'q3-ui-forms';
import { SubDetail } from 'q3-admin/lib/containers';
import { forEach, size } from 'lodash';

const PoolsExercises = (props) => (
  <SubDetail
    th="week"
    root="events"
    cardProps={{
      title: 'week',
      attributes: ['duration', 'url', 'sizeOfExercises'],
      editable: {},
    }}
    decorators={{
      get: ({ events = [] }) =>
        forEach(events, (xs, i) => {
          xs.sizeOfExercises = size(xs.exercises);
          xs.week = `#${String(i + 1)}`;
        }),
    }}
    {...props}
  >
    <Builders.Form>
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
