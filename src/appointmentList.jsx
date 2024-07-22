import { observer } from 'mobx-react-lite';
import appointment from './classes/appointment';
import SingleAppointment from './singleAppointment';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

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

const CustomizedTables = observer(() => {
    const [list,setList] =React.useState( appointment.getAllApointments);

    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Client Name</StyledTableCell>
                        <StyledTableCell align="right">Client Phone</StyledTableCell>
                        <StyledTableCell align="right">Client Email</StyledTableCell>
                        <StyledTableCell align="right">Service Type</StyledTableCell>
                        <StyledTableCell align="right">Date Time</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((appointment, index) => (
                        <SingleAppointment key={index} {...appointment} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

export default CustomizedTables;
