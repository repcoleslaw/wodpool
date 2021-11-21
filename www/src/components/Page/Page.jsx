import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
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
          <span> {t(title)}</span>
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default Page;
