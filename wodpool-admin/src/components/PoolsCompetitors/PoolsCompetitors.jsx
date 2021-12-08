import React from 'react';
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
