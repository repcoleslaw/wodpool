import React from 'react';
import { Builders } from 'q3-ui-forms';
import { connect } from 'q3-admin/lib/containers';
import { isCompetitor } from '../UsersAdd/UsersAdd';

const UsersGeneral = connect(({ data, ...rest }) => (
  <Builders.Form {...rest} initialValues={data}>
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
    <Builders.Field name="numberOfWeeks" type="number" />
  </Builders.Form>
));

export default UsersGeneral;
