import '../App.css';
import NavBar from "../navigation/NavBar";
import { useEffect } from 'react';
import listClasses from '../Connect';
function Home() {
 useEffect(()=> {
  //handle the promise.
  const promise = listClasses();
  promise.then(() => {
    console.log(promise);
  })
 });
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
