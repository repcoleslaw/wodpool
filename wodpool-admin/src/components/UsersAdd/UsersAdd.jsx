import React from 'react';
import { Builders, helpers } from 'q3-ui-forms';

export const ADMINISTRATOR = 'Administrator';
export const COMPETITOR = 'Competitor';

export const assignDiscriminator = (v, { role }) =>
  role === COMPETITOR ? 'competitors' : undefined;

export const isCompetitor = [`role=${COMPETITOR}`];

const UsersAdd = (props) => (
  <Builders.Form
    {...props}
    marshalSelectively
    marshal={{
      __t: [assignDiscriminator],
    }}
  >
    <Builders.Field
      name="firstName"
      required
      type="text"
      xl={6}
    />
    <Builders.Field
      name="lastName"
      required
      type="text"
      xl={6}
    />
    <Builders.Field
      name="email"
      required
      type="email"
      xl={6}
    />
    <Builders.Field
      xl={6}
      name="role"
      type="select"
      required
      options={helpers.asOptions([
        ADMINISTRATOR,
        COMPETITOR,
      ])}
    />
    <Builders.Field
      name="handle"
      type="text"
      conditional={isCompetitor}
      xl={6}
      required
    />
  </Builders.Form>
);

export default UsersAdd;
