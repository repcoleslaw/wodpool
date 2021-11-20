import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { first } from 'lodash';
import { string } from 'q3-ui-helpers';
import moment from 'moment';
import { Link } from 'gatsby';

const PoolsCard = ({
  description,
  id,
  name,
  photo,
  startsOn,
}) => {
  return (
    <Card style={{ height: '100%' }}>
      <CardHeader
        avatar={<Avatar src={photo}>{first(name)}</Avatar>}
        subheader={`Starts on ${moment(
          string.toDate(startsOn),
        ).format('MMM DD')}`}
        title={name}
      />
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          component={Link}
          to={`/app/pools/${id}`}
        >
          View
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
        >
          Join
        </Button>
      </CardActions>
    </Card>
  );
};

export default PoolsCard;
