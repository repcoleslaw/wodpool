import React from 'react';
import { Builders } from 'q3-ui-forms';
import { SubDetail } from 'q3-admin/lib/containers';

const PoolsExercises = (props) => (
  <SubDetail
    th="name"
    root="events"
    cardProps={{
      title: 'name',
      describe: 'description',
      attributes: [],
      editable: {},
    }}
    {...props}
  >
    <Builders.Form>
      <Builders.Field
        name="equipment"
        type="text"
        multiline
        rows={8}
        required
        xl={12}
        lg={12}
      />
      <Builders.Field
        required
        name="duration"
        type="number"
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
          name="description"
          type="text"
          required
          multiline
          rows={8}
          xl={12}
          lg={12}
        />
      </Builders.Repeater>
    </Builders.Form>
  </SubDetail>
);

export default PoolsExercises;
