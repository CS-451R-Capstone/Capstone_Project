import React from 'react';
import '../App.css';
import NavBar from '../navigation/NavBar';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
<<<<<<< HEAD
import store from "../store"
=======
>>>>>>> 6e76fa77f6bd8f587fdd5d0b565398cc37821fe7

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),

  ];

function MyAccount(){
<<<<<<< HEAD
    console.log(store.getState())
=======
>>>>>>> 6e76fa77f6bd8f587fdd5d0b565398cc37821fe7
    return(
        <div className='App'>
            <div>
                <NavBar/>
            </div>
            <h1>
                My Account Page
            </h1>
<<<<<<< HEAD
            <p>Name: {store.getState().auth.user.decoded.name}</p>
            <p>Email:{store.getState().auth.user.email}</p>
=======
            <p>Name: </p>
            <p>Email: </p>
>>>>>>> 6e76fa77f6bd8f587fdd5d0b565398cc37821fe7
            <h2>Jobs applied to </h2>

            <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 650, position: "fixed", top: 300, left: '30%' }}>

                <TableHead>
                <TableRow>
                    <TableCell>Job</TableCell>
                    <TableCell align="center">View</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="center"><Button variant="contained">Edit</Button></TableCell>

                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <p>Are you GTA certified? Get certification here: <a href="https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/">GTA Certification</a></p>
        </div>
        
    );
}
export default MyAccount;

<<<<<<< HEAD
// store.getState().auth.user.name
=======
>>>>>>> 6e76fa77f6bd8f587fdd5d0b565398cc37821fe7
