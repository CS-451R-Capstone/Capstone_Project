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
import { useState, useEffect } from 'react';



function createData(className, posting, sectionID) {
    return { className, posting, sectionID};
};


  function MyAccount(){
    //const isAuthenticated = store.getState().auth.isAuthenticated;
    //const history = useHistory();

    const isAdmin = store.getState().auth.user.isAdmin;
    const user = store.getState().auth.user.decoded.name;

    const [postInfo, setPostInfo] = useState([]);
    

    
    useEffect(() => {
        async function getPostings(){
            const ctrl = new AbortController();
            setTimeout(() => ctrl.abort(), 5000);
            const response = await fetch(`http://localhost:5000/user_applications?user=${encodeURIComponent(store.getState().auth.user.decoded.name)}`,{method: "GET"})
                //const message = `An error occurred: ${response.statusText}`;
                //window.alert(message);
                let postInfo = await response.json();
                setPostInfo(postInfo);
                console.log(postInfo);
        }
        getPostings();
        return;
    }, [postInfo.length])
    const rows = [
        createData('tony', 159, 6.0, 24, 4.0),
        createData('dally', 237, 9.0, 37, 4.3)
    
    ];
        if(isAdmin){
            return(
                <div className='App'>
                    <div>
                        <NavBar/>
                    </div>
                    <h1>
                        My Account Page
                    </h1>
                    <p>Name: {user}</p>
                    <p>Email: {store.getState().auth.user.email}</p>
                    <p>Admin?: {isAdmin ? "yes" : "no"}</p>
                    <h2>Job Postings Created</h2>
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

                </div>

            )
        }

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
                <p>Admin?: {isAdmin ? "yes" : "no"}</p>
                <h2>Jobs applied to </h2>
    
                <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 650, position: "fixed", top: 300, left: '30%' }}>
    
                    <TableHead>
                    <TableRow>
                        <TableCell>Class</TableCell>
                        <TableCell align="center">Job Posting</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {postInfo.map((post) => {
                            if(post.postings[0].job_title === "GTA" && post.postings[0].Applicants.length > 1){
                                return(
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {post.className + "-" + post.sectionID}
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            GTA
                                        </TableCell>
                                        <TableCell align="right"><Button variant="contained">Edit</Button></TableCell>
        
                                    </TableRow>
    
                                )

                            }
                            if(post.postings[1].job_title === "Grader" && post.postings[1].Applicants.length > 1){
                                return(
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {post.className + "-" + post.sectionID}
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            Grader
                                        </TableCell>
                                        <TableCell align="right"><Button variant="contained">Edit</Button></TableCell>
        
                                    </TableRow>
    
                                )

                            }


                           
                            

                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                <p>Are you GTA certified? Get certification here: <a href="https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/">GTA Certification</a></p>
            </div>
            
        );

}
export default MyAccount;
