import React from 'react';
import { Builders, helpers } from 'q3-ui-forms';

const PoolsAdd = (props) => (
  <Builders.Form
    {...props}
    marshalSelectively
    marshal={{
      startsOn: [helpers.castToUTC],
      featured: [helpers.castToBoolean],
    }}
  >
    <Builders.Field
      name="name"
      type="text"
      required
      xl={12}
      lg={12}
    />
    <Builders.Field
      name="startsOn"
      required
      type="date"
      xl={6}
      lg={6}
    />
    <Builders.Field
      required
      name="type"
      type="select"
      options={['Minutes', 'Cycles']}
      required
      xl={6}
      lg={6}
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
    <Builders.Field
      name="featured"
      required
      type="checkbox"
      variant="switch"
      xl={12}
      lg={12}
    />
  </Builders.Form>
);

export default PoolsAdd;
