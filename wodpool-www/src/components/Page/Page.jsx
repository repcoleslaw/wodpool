import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useTranslation } from 'q3-ui-locale';
import useStyle from '../Sponsors/styles';

const Page = ({ title, children }) => {
  const { t } = useTranslation('titles');
  const cls = useStyle();

  return (
    <Box my={4}>
      <Container>
        <Typography
          align="center"
          variant="h2"
          className={cls.title}
        >
          <span>{t(title)}</span>
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
