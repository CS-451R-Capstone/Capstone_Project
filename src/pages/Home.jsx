import '../App.css';
import NavBar from "../navigation/NavBar";
import {useEffect, useState} from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import {MDBBtn} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

function Home() {
  const [cardInfo, setCardInfo] = useState([]);
  useEffect(() => {
    async function getClasses(){
      const response = await fetch(`http://localhost:5000/home`);
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
        <MDBRow>
          <MDBCol sm='6'>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>{`Class: `+card.className}</MDBCardTitle>
                <MDBCardText>{`Section ID: `+card.sectionID}</MDBCardText>
              </MDBCardBody>
              <Link to={{pathname: '/postings', state: {card: card}}}>
                <MDBBtn>See Postings</MDBBtn>
              </Link>
            </MDBCard>
          </MDBCol>
        </MDBRow>
         

      )
    })
  }

  return (
    <>
      <div className="App">
        <div>
          <NavBar />
        </div>
      </div>
      {classList()}
    
    </>
   

  );
}

export default Home;
