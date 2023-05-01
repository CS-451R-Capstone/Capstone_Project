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
import { useState, useEffect } from 'react';

function createData(className, posting, sectionID) {
    return { className, posting, sectionID};
};

  const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0)

  ];


  function MyAccount(){
    const [allJobs, setallJobs] = useState([]);
    const user = store.getState().auth.user.decoded.name;




    useEffect(() => {
        async function getAllJobs() {
            const response = await fetch('http://localhost:5000/user_applications');
            if(response.ok){
                //const message = `An error occurred: ${response.statusText}`;
                //window.alert(message);
                let allJobs = await response.json()
                setallJobs(allJobs);
                return;
            }
              
        }
        getAllJobs();
        console.log(allJobs);
    
        return;

    }, [allJobs.length]);


    return(
            <div className='App'>
                <div>
                    <NavBar/>
                </div>
                <h1>
                    My Account Page
                </h1>
                <p>Name: {store.getState().auth.user.decoded.name}</p>
                <p>Email: {store.getState().auth.user.email}</p>
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
