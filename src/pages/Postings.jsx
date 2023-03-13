import React, { useState } from 'react';
import '../App.css';
import NavBar from '../navigation/NavBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Postings(){
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

    function postList(){
        return postInfo.map((post) => {
            if(post.className == card.className){
                return(
                    <>
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.postings.posting1.job_title}</Card.Title>
                                <Card.Text>{post.postings.posting1.is_GTA_Required ? "GTA is required" : "GTA is not required"}</Card.Text>
                            </Card.Body>
                            <Link to={{pathname: '/submission-portal', state: {posting: post.postings.posting1}}}>
                                <Button variant="primary">Apply</Button>
                            </Link>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.postings.posting2.job_title}</Card.Title>
                                <Card.Text>{post.postings.posting2.is_GTA_Required ? "GTA is required" : "GTA is not required"}</Card.Text>
                            </Card.Body>
                            <Link to={{pathname: '/submission-portal', state: {posting: post.postings.posting2}}}>
                                <Button variant="primary">Apply</Button>
                            </Link>
                        </Card>
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
                {`Classname: `+ card.className + ", Section ID:" + card.sectionID}
            </h2>
            <div className="card-container">
                {postList()}
            </div>
            
            
        </div>
    );
}
export default Postings;