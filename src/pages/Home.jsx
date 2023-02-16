import '../App.css';
import { useState, useEffect } from 'react';
import {v4} from 'uuid'
import NavBar from "../navigation/NavBar";


/*
 * Note for all team members: I have added comments to my changes below. I have hooked up a google firestore database
already. There are going to be a lot of changes. This is just a test to see if it was all connected properly. A lot of the 
functions and React Hooks in this file can be used again for actual functionality. 
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
