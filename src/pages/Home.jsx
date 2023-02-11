import '../App.css';
import { useState, useEffect } from 'react';
import {db, storage} from '../firebase-config';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';
import {ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid'
import NavBar from "../navigation/NavBar";


/*
 * Note for all team members: I have added comments to my changes below. I have hooked up a google firestore database
already. There are going to be a lot of changes. This is just a test to see if it was all connected properly. A lot of the 
functions and React Hooks in this file can be used again for actual functionality. 
 */

function Home() {
  //react hook to change the 
  const [fileUpload, setFileUpload] = useState(null);
  //react hook to change the state of a new name (added, updated, deleted) to the database
  const [newName, setNewName] = useState("");
  //react hook to change the state of a new age (added, updated, deleted) added to the database
  const [newAge, setNewAge] = useState(0);
  //react hook to change the state of users from the database
  const [users, setUsers] = useState([]);
  //specifies the collection from Google Firestore database to get
  const usersCollectionRef = collection(db, "users");
  //function to update the user's age
  const updateUser = async(id, age) =>{
    const userDoc = doc(db, "users", id);

    const newFields = {age: age + 1};
    /*
    API call to the database. (very similar to POST HTTP protocol)
     always use the keyword 'await' because 
     we don't know when exactly the call will be made
    */
    await updateDoc(userDoc, newFields);


  };
  //function to add new user to the database
  const createUser = async() => {
    //API call to add new user (very similar to POST HTTP protocol)
    await addDoc(usersCollectionRef, {name: newName, age: newAge});


  };
  //function to delete a user from the database (requires the id of the user)
  const deleteUser = async(id) => {
    const userDoc = doc(db, "users", id);
    //API call to delete a user (very similar to DELETE HTTP protocol)
    await deleteDoc(userDoc);

  }
  //function to add files
  const uploadFile = () => {
    if(fileUpload == null) return;
    const fileRef = ref(storage, `images/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then(() =>{
      alert("file uploaded!");
    })


  };
  //React hook to update changes as soon as someone clicks the refresh or when the page loads
  //don't ever make this a const function. instead any other function created inside should be declared a const.
  //then outside that const function, call it.
  useEffect(() => {
    const getUsers = async () => {
      //api call to get the data from the database (similar to a GET HTTP protocol)
      const data = await getDocs(usersCollectionRef);
      //console.log(data);
      //filters through the data from the database and saves the users to display on the webpage
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));


    }

    getUsers();

  }, [usersCollectionRef])

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
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return(
          <div> 
          <h1>Name: {user.name} </h1>
          <h1>Age: {user.age}</h1>
          <button 
          onClick={() => {updateUser(user.id, user.age)}}>
            Increase Age
          </button>
          <button onClick={() => {deleteUser(user.id)}}>
            Delete User
          </button>
          </div>
          
        ) 
      })
      }
      <div>
        <input type="file" onChange={(event) => {setFileUpload(event.target.files[0])}}/>
        <button onClick={uploadFile}>Upload File</button> 

      </div>

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
