import '../App.css';
import {useState} from 'react';
import NavBar from '../navigation/NavBar';
import { useLocation } from 'react-router-dom';



function Submission_Portal(){
    const location = useLocation();
    const posting = location.state?.posting;
    const className = location.state?.className;
    const sectionID = location.state?.sectionID;
    //react hook to change the state of the file uploads
    const [fileUpload, setFileUpload] = useState(null);
    //function to add files
    const uploadFile = () => {
        if(fileUpload == null) return;
        else{
            alert('file uploaded!')
        }
    };
    return(
        <div className='App'>
            <div>
                <NavBar/>
            </div>
            <h1>{`Class: `+ className + `, Section: ` + sectionID}</h1>
            <h2>{`Job Title: `+posting.job_title}</h2>
            <div>
                <input type="file" onChange={(event) => {setFileUpload(event.target.files[0])}}/>
                <button onClick={uploadFile}>Upload File</button> 

            </div>

        </div>
       
    )

}

export default Submission_Portal;