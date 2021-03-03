import React from 'react';
import { Builders, helpers } from 'q3-ui-forms';

const PoolsAdd = (props) => (
  <Builders.Form {...props}>
    <Builders.Field
      name="name"
      type="text"
      required
      xl={12}
      lg={12}
    />
    <Builders.Field name="price" type="number" xl={6} />
    <Builders.Field
      name="maximumCompetitors"
      type="number"
      xl={6}
    />
    <Builders.Field
      name="description"
      type="text"
      multiline
      rows={8}
      xl={12}
      lg={12}
      required
    />
  </Builders.Form>
);

export default PoolsAdd;
