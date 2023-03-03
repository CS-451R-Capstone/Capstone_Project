import '../App.css';
import NavBar from "../navigation/NavBar";
import {useEffect} from 'react';
/*
useEffect(() => {
  async function getClasses(){
    const response = await fetch(`http://localhost:5000/home/`);
    if(!response.ok){
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    console.log(response.json());
  }
  getClasses();
})
*/
function Home() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <input placeholder="Name..." 
      />
      <input type="number" 
      placeholder="Age..."
      />
    </div>
  );
}

export default Home;
