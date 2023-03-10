import '../App.css';
import NavBar from "../navigation/NavBar";
import {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Home() {
  const [cardInfo, setCardInfo] = useState([]);
  useEffect(() => {
    async function getClasses(){
      const response = await fetch(`http://localhost:5000/home/`);
      if(response.ok){
        //const message = `An error occurred: ${response.statusText}`;
        //window.alert(message);
        let cardInfo = await response.json()
        setCardInfo(cardInfo);
        return;
      }
      
    }
    getClasses();
    return;
  }, [cardInfo.length])
  //console.log(cardInfo);

  function classList(){
    return cardInfo.map((card) => {
      return (
        <>
         <Card>
            <Card.Body>
              <Card.Title>{`Section ID: `+card.sectionID}</Card.Title>
              <Card.Text>{`Class: `+card.className}</Card.Text>
            </Card.Body>
            <Link to='/postings'>
              <Button variant="primary">See Postings</Button>
            </Link>
          </Card>

        </>

      )
    })
  }

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className="card-container">
        {classList()}
      </div>
    </div>
  );
}

export default Home;
