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
      if(!response.ok){
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      console.log(response.json());
      setCardInfo(cardInfo);
    }
    getClasses();
    return;
  }, [cardInfo.length])

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className="card-container">
        {
          cardInfo.map((card) => {
            return(
              <>
                <Card>
                  <Card.Body>
                    <Card.Title>{card.sectionID}</Card.Title>
                    <Card.Text>{card.className}</Card.Text>
                  </Card.Body>
                  <Link to='/postings'>
                    <Button variant="primary">See Postings</Button>
                  </Link>
                </Card>

              </>
            )
          })
        }
       

      </div>
    </div>
  );
}

export default Home;
