import React from 'react';
import { Builders } from 'q3-ui-forms';
import { SubDetail } from 'q3-admin/lib/containers';

const PoolsCompetitors = (props) => (
  <SubDetail
    th="handle"
    root="competitors"
    addComponent={<div />}
    disableEditor
    disableMultiselect
    cardProps={{
      title: 'handle',
    }}
    {...props}
  />
);

export default PoolsCompetitors;
