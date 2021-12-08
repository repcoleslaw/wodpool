import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import { first } from 'lodash';
import { string } from 'q3-ui-helpers';
import moment from 'moment';
import { Link } from 'gatsby';
import useStyle from './styles';

const PoolsCard = ({
  description,
  id,
  name,
  photo,
  startsOn,
  endsOn,
}) => {
  const toDate = (xs) =>
    moment(string.toDate(xs)).format('MMM DD');

  const cls = useStyle();

  return (
    <Card className={cls.card}>
      <CardActionArea
        component={Link}
        to={`/app/pools/${id}`}
      >
        <CardHeader
          avatar={
            <Avatar src={photo}>{first(name)}</Avatar>
          }
          classes={cls}
          title={name}
          subheader={[
            toDate(startsOn),
            toDate(endsOn),
          ].join(' - ')}
          action={<LaunchIcon />}
        />
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

PoolsCard.defaultProps = {
  photo: '/favicon.png',
};

export default PoolsCard;
