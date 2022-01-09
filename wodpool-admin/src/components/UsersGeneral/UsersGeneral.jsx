import React from 'react';
import { Builders } from 'q3-ui-forms';
import { castToBoolean } from 'q3-ui-forms/lib/helpers';
import { connect } from 'q3-admin/lib/containers';
import { isCompetitor } from '../UsersAdd/UsersAdd';

const UsersGeneral = connect(({ data, ...rest }) => (
  <Builders.Form
    {...rest}
    initialValues={data}
    keep={[
      'role',
      'firstName',
      'lastName',
      'handle',
      'email',
      'bio',
      'termsAccepted',
      'allowExtraEmails',
    ]}
    marshalSelectively
    marshal={{
      termsAccepted: [castToBoolean],
      allowExtraEmails: [castToBoolean],
    }}
  >
    <Builders.Field
      required
      name="firstName"
      type="text"
      xl={6}
    />
    <Builders.Field
      required
      name="lastName"
      type="text"
      xl={6}
    />
    <Builders.Field
      name="handle"
      type="text"
      conditional={isCompetitor}
      required
      xl={6}
    />
    <Builders.Field
      required
      name="email"
      type="email"
      xl={6}
    />
    <Builders.Field
      name="bio"
      type="editor"
      conditional={isCompetitor}
      rows={12}
      lg={12}
      xl={12}
    />
    <Builders.Field
      name="termsAccepted"
      type="checkbox"
      conditional={isCompetitor}
    />
    <Builders.Field
      name="allowExtraEmails"
      type="checkbox"
      conditional={isCompetitor}
    />
  </Builders.Form>
));

export default UsersGeneral;
