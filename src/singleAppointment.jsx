import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const SingleAppointment = observer(({ id, clientName, clientPhone, clientEmail, serviceType, dateTime }) => {
    return (
        <StyledTableRow key={id}>
            <StyledTableCell component="th" scope="row">{clientName}</StyledTableCell>
            <StyledTableCell align="right">{clientPhone}</StyledTableCell>
            <StyledTableCell align="right">{clientEmail}</StyledTableCell>
            <StyledTableCell align="right">{serviceType}</StyledTableCell>
            <StyledTableCell align="right">{dateTime}</StyledTableCell>
        </StyledTableRow>
    );
});

export default SingleAppointment;

