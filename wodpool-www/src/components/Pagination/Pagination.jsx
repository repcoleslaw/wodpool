import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Button } from '@material-ui/core';
import { useTranslation } from 'q3-ui-locale';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import usePage from '../usePage';

const Pagination = ({ hasPrevPage, hasNextPage }) => {
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

Pagination.defaultProps = {
  hasPrevPage: false,
  hasNextPage: false,
};

Pagination.propTypes = {
  hasPrevPage: PropTypes.bool,
  hasNextPage: PropTypes.bool,
};

export default Pagination;
