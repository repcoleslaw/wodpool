import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { map, orderBy } from 'lodash';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PoolSchedule = ({ events }) =>
  map(events, (week, idx) => (
    <Accordion defaultExpanded key={week.id}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <strong>Week #{idx + 1}</strong> - {week.equipment}{' '}
        ({week.duration} minutes)
      </AccordionSummary>
      <AccordionDetails>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th">
                Excersise
              </TableCell>
              <TableCell
                component="th"
                style={{ width: 145 }}
              >
                Reps
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {map(week?.exercises, (excercise) => (
              <TableRow key={excercise.id}>
                <TableCell>{excercise.name}</TableCell>
                <TableCell>{excercise.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AccordionDetails>
    </Accordion>
  ));

export default PoolSchedule;
