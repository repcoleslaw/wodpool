import React from 'react';
import { Builders, helpers } from 'q3-ui-forms';
import { connect } from 'q3-admin/lib/containers';
import { isCompetitor } from '../UsersAdd/UsersAdd';

const UsersGeneral = connect(({ data, ...rest }) => (
  <Builders.Form
    {...rest}
    initialValues={data}
    marshalSelectively
    marshal={{
      startsOn: [helpers.castToUTC],
    }}
    keep={[
      'name',
      'description',
      'price',
      'maximumCompetitors',
      'startsOn',
    ]}
  >
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
    <Builders.Field name="price" type="number" />
    <Builders.Field
      name="maximumCompetitors"
      type="number"
    />
    <Builders.Field name="startsOn" type="date" required />
  </Builders.Form>
));

export default UsersGeneral;
