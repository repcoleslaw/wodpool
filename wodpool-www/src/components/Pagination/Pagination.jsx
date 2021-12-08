import React from 'react';
import useRest from 'q3-ui-rest';
import { map } from 'lodash';
import {
  Box,
  Container,
  Fade,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { useTranslation } from 'q3-ui-locale';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import usePage from '../usePage';

const Pools = ({ hasPrevPage, hasNextPage }) => {
  const { t } = useTranslation('labels');
  const page = usePage();

  return (
    <Container>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
      >
        <Grid item>
          {hasPrevPage && (
            <Button
              startIcon={<ArrowBackIosIcon />}
              onClick={page(-1)}
            >
              {t('prev')}
            </Button>
          )}
        </Grid>
        <Grid item style={{ textAlign: 'right' }}>
          {hasNextPage && (
            <Button
              endIcon={<ArrowForwardIosIcon />}
              onClick={page(1)}
            >
              {t('next')}
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pools;
