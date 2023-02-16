import '../App.css';
import { useState, useEffect } from 'react';
import NavBar from "../navigation/NavBar";


/*
 * Note for all team members: I have added comments to my changes below. I have hooked up a google firestore database
already. There are going to be a lot of changes. This is just a test to see if it was all connected properly. A lot of the 
functions and React Hooks in this file can be used again for actual functionality. 
 */

function Home() {
  //react hook to change the state of a new name (added, updated, deleted) to the database
  const [newName, setNewName] = useState("");
  //react hook to change the state of a new age (added, updated, deleted) added to the database
  const [newAge, setNewAge] = useState(0);
  //react hook to change the state of users from the database
  const [testInfo, setTestInfo] = useState([]);
  //specifies the collection from Google Firestore database to get
  const testCollectionRef = collection(db, "test");
  //function to update the user's age
  const updateTestEntry = async(id, age) =>{
    const testDoc = doc(db, "test", id);

    const newFields = {age: age + 1};
    /*
    API call to the database. (very similar to POST HTTP protocol)
     always use the keyword 'await' because 
     we don't know when exactly the call will be made
    */
    await updateDoc(testDoc, newFields);


  };
  //function to add new user to the database
  const createTestEntry = async() => {
    //API call to add new user (very similar to POST HTTP protocol)
    await addDoc(testCollectionRef, {name: newName, age: newAge});


  };
  //function to delete a user from the database (requires the id of the user)
  const deleteTestEntry = async(id) => {
    const userDoc = doc(db, "test", id);
    //API call to delete a user (very similar to DELETE HTTP protocol)
    await deleteDoc(userDoc);

  }

  //React hook to update changes as soon as someone clicks the refresh or when the page loads
  //don't ever make this a const function. instead any other function created inside should be declared a const.
  //then outside that const function, call it.
  useEffect(() => {
    const getTestInfo = async () => {
      //api call to get the data from the database (similar to a GET HTTP protocol)
      const data = await getDocs(testCollectionRef);
      //console.log(data);
      //filters through the data from the database and saves the users to display on the webpage
      setTestInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));


    }

    getTestInfo();

  }, [testCollectionRef])

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <input placeholder="Name..." 
      onChange={(event) => {setNewName(event.target.value)}}/>
      <input type="number" 
      placeholder="Age..."
      onChange={(event) => {setNewAge(event.target.valueAsNumber)}}/>
      <button onClick={createTestEntry}>Create Test Entry</button>
      {testInfo.map((testEntry) => {
        return(
          <div> 
          <h1>Name: {testEntry.name} </h1>
          <h1>Age: {testEntry.age}</h1>
          <button 
          onClick={() => {updateTestEntry(testEntry.id, testEntry.age)}}>
            Increase Age
          </button>
          <button onClick={() => {deleteTestEntry(testEntry.id)}}>
            Delete Test Entry
          </button>
          </div>
          
        ) 
      })
      }

      {
        /*
         <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
       */

      }
     
    </div>
  );
}

export default Home;
