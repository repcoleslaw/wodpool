import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { map, orderBy } from 'lodash';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';

const PoolSchedule = ({ type = 'Minutes', events }) => {
  const { t } = useTranslation('labels');

  return map(events, (week, idx) => (
    <Box key={week.id} mb={2}>
      <Box
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        mb={1}
        px={0.25}
      >
        <Box>
          <Typography variant="h4" component="h3">
            <strong>
              {t('week')} #{idx + 1}
            </strong>
          </Typography>
          <Typography>
            {t('equipment')}: {week.equipment}
          </Typography>
        </Box>
        <Typography color="secondary" component="em">
          <small>
            {week.duration} {type}
          </small>
        </Typography>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th">
              {t('exercise')}
            </TableCell>
            <TableCell
              component="th"
              style={{ width: 145 }}
            >
              {t('reps')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {map(week?.exercises, (excercise) => (
            <TableRow key={excercise.id}>
              <TableCell>
                <strong>{excercise.name}</strong>
                <br />
                {excercise.description}
              </TableCell>
              <TableCell>{excercise.reps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  ));
};

export default PoolSchedule;
