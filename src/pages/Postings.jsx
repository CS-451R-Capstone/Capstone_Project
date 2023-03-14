import React, { useState } from 'react';
import '../App.css';
import NavBar from '../navigation/NavBar';
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle} from 'mdb-react-ui-kit';
import {MDBBtn} from 'mdb-react-ui-kit';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
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
                    <>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>{post.postings.posting1.job_title}</MDBCardTitle>
                                <MDBCardText>{post.postings.posting1.is_GTA_Required ? "GTA is required" : "GTA is not required"}</MDBCardText>
                            </MDBCardBody>
                            <Link to={{pathname: '/submission-portal', state: {posting: post.postings.posting1}}}>
                                <MDBBtn>Apply</MDBBtn>
                            </Link>
                        </MDBCard>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>{post.postings.posting2.job_title}</MDBCardTitle>
                                <MDBCardText>{post.postings.posting2.is_GTA_Required ? "GTA is required" : "GTA is not required"}</MDBCardText>
                            </MDBCardBody>
                            <Link to={{pathname: '/submission-portal', state: {posting: post.postings.posting2}}}>
                                <MDBBtn>Apply</MDBBtn>
                            </Link>
                        </MDBCard>
                    </>


                )

            }
        })
    }
 
    return(
        <div className='App'>
            <div>
                <NavBar />
            </div>
            <h1> Postings </h1>
            <h2>
                {`Classname: `+ card.className + ", Section ID: " + card.sectionID}
            </h2>
            {postList()}
            
            
        </div>
    );
}
export default Postings;