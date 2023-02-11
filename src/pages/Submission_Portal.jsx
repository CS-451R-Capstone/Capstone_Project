import '../App.css';
import {useState} from 'react';
import {ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid'
import {storage} from '../firebase-config';
import NavBar from '../navigation/NavBar';



function Submission_Portal(){
    //react hook to change the state of the file uploads
    const [fileUpload, setFileUpload] = useState(null);
    //function to add files
    const uploadFile = () => {
        if(fileUpload == null) return;
        const fileRef = ref(storage, `images/${fileUpload.name + v4()}`);
        uploadBytes(fileRef, fileUpload).then(() =>{
            alert("file uploaded!");
        })
    };
    return(
        <div className='App'>
            <div>
                <NavBar/>
            </div>
            <div>
                <input type="file" onChange={(event) => {setFileUpload(event.target.files[0])}}/>
                <button onClick={uploadFile}>Upload File</button> 

            </div>

        </div>
       
    )

}

export default Submission_Portal;