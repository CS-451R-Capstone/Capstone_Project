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
import store from "../store"
import { useHistory } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
};

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),

  ];

  function MyAccount(){
    const isAuthenticated = store.getState().auth.isAuthenticated;
    const history = useHistory();

    const RedirectToLogin = () => {
        if(!isAuthenticated){
            history.push('/login');
        }


    };

    if(isAuthenticated){
        return(
            <div className='App'>
                <div>
                    <NavBar/>
                </div>
                <h1>
                    My Account Page
                </h1>
                <p>Name: {store.getState().auth.user.name}</p>
                <p>Email: </p>
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
                        <TableCell align="center"><Button onClick={RedirectToLogin} variant="contained">Edit</Button></TableCell>
    
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <p>Are you GTA certified? Get certification here: <a href="https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/">GTA Certification</a></p>
            </div>
            
        );

    }
    /*
    else if(!isAuthenticated){
        return(
            <Redirect to={{pathname: '/login', state: {posting, className, sectionID}}}/>
        )
    }
    */

}
export default MyAccount;

// store.getState().auth.user.name