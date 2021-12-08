import React from 'react';
import { Builders, helpers } from 'q3-ui-forms';
import { connect } from 'q3-admin/lib/containers';

const UsersGeneral = connect(({ data, ...rest }) => (
  <Builders.Form
    {...rest}
    initialValues={data}
    marshalSelectively
    marshal={{
      startsOn: [helpers.castToUTC],
      featured: [helpers.castToBoolean],
    }}
    keep={[
      'name',
      'description',
      'maximumCompetitors',
      'startsOn',
      'endsOn',
      'featured',
      'type',
    ]}
  >
    <Builders.Field
      required
      name="name"
      type="text"
      xl={6}
      lg={6}
    />
    <Builders.Field
      required
      name="type"
      type="select"
      options={['Minutes', 'Cycles']}
      xl={6}
      lg={6}
    />
    <Builders.Field
      name="maximumCompetitors"
      type="number"
      xl={6}
      lg={6}
    />
    <Builders.Field
      name="startsOn"
      xl={3}
      lg={3}
      type="date"
      required
    />
    <Builders.Field
      name="endsOn"
      type="date"
      xl={3}
      lg={3}
      disabled
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
      name="featured"
      required
      type="checkbox"
      variant="switch"
      xl={12}
      lg={12}
    />
  </Builders.Form>
));

export default UsersGeneral;
