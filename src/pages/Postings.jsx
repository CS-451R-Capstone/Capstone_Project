import React from 'react';
import '../App.css';
import NavBar from '../navigation/NavBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
function Postings(){
    return(
        <div className='App'>
            <div>
                <NavBar />
            </div>
            <h1>
                CS 5104: Postings
            </h1>
            <Card>
                <Card.Body>
                    <Card.Title>Grader</Card.Title>
                </Card.Body>
                <Link to='/submission-portal'>
                    <Button variant="primary">Apply</Button>
                </Link>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>GTA</Card.Title>
                </Card.Body>
                <Link to='/submission-portal'>
                    <Button variant="primary">Apply</Button>
                </Link>
            </Card>
            
        </div>
    );
}
export default Postings;