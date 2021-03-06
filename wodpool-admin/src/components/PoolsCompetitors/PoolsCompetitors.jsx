import React from 'react';
import { Builders } from 'q3-ui-forms';
import { SubDetail } from 'q3-admin/lib/containers';

const PoolsCompetitors = (props) => (
  <SubDetail
    th="name"
    root="competitors"
    // disable it
    addComponent={<div />}
    disableEditor
    disableMultiselect
    cardProps={{}}
    {...props}
  >
    <Builders.Form>
      <Builders.Field
        required
        name="name"
        type="text"
        required
        xl={12}
        lg={12}
      />
      <Builders.Field
        required
        name="description"
        type="text"
        multiline
        rows={8}
        xl={12}
        lg={12}
      />
      <Builders.Field
        required
        name="reps"
        type="number"
        required
      />
    </Builders.Form>
  </SubDetail>
);

export default PoolsCompetitors;
