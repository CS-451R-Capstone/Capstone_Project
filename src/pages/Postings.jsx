import React, { useState } from 'react';
import '../App.css';
import NavBar from '../navigation/NavBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Postings(){
    //gets a properties from the last page visited (in this case with the workflow, after someone clicks see postings under a class on the home page
    // the properties get redirected here)
    const location = useLocation();
    //console.log(props, " props");
    //console.log(location, " useLocation Hook");
    const card = location.state?.card;
    const [postInfo, setPostInfo] = useState([]);
    useEffect(() => {
        async function getPostings(){
            const response = await fetch(`http://localhost:5000/postings`);
            if(response.ok){
                //const message = `An error occurred: ${response.statusText}`;
                //window.alert(message);
                let postInfo = await response.json()
                setPostInfo(postInfo);
                return;
            }
        }
        getPostings();
        return;
    }, [postInfo.length])

    //function that returns a JSX element of the list of postings for that class
    function postList(){
        return postInfo.map((post) => {
            if(post.className === card.className){
                return(
                    <Box display='inline-block'>
                        <Card>
                            <CardContent>
                                <Typography variant='h4' component='div'>
                                    {post.postings.posting1.job_title}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {post.postings.posting1.is_GTA_Required ? "GTA is required" : "GTA is not required"}
                                </Typography>
                                <CardActions>
                                    <Link to={{pathname: '/submission-portal', 
                                    state: {
                                        posting: post.postings.posting1,
                                        className: card.className,
                                        sectionID: card.sectionID}}}>
                                        <Button>Apply</Button>
                                    </Link>
                                </CardActions>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <Typography variant='h4' component='div'>
                                    {post.postings.posting2.job_title}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {post.postings.posting2.is_GTA_Required ? "GTA is required" : "GTA is not required"}
                                </Typography>
                                <CardActions>
                                    <Link to={{pathname: '/submission-portal', 
                                    state: {
                                    posting: post.postings.posting2, 
                                    className: card.className, 
                                    sectionID: card.sectionID
                                    }}}>
                                        <Button>Apply</Button>
                                    </Link>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Box>


                )

            }
        })
    }
 
    return(
        <>
            <div className='App'>
                <div>
                    <NavBar />
                </div>
                <h1> Postings </h1>
                <h2>
                    {`Classname: `+ card.className + ", Section ID: " + card.sectionID}
                </h2>    
            </div>
            {postList()}
        </>
        
    );
}
export default Postings;