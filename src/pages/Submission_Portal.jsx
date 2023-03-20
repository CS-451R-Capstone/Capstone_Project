import '../App.css';
import {useState} from 'react';
import NavBar from '../navigation/NavBar';



function Submission_Portal(){
    //react hook to change the state of the file uploads
    const [fileUpload, setFileUpload] = useState(null);
   
    //function to add files
    async function uploadFile() {
        if(fileUpload == null) return; //If no file is submitted bail out.
        else{
            alert('file uploaded!')
            let formData = new FormData();
            const ctrl = new AbortController();
            setTimeout(() => ctrl.abort(), 5000);
            formData.append("file", fileUpload); //Tag our file
            formData.append("Class", className);
            formData.append("Section", sectionID);
            formData.append("Job", posting.job_title);
            console.log(fileUpload)
            try
            {
                //Post to the backend, where it is listening.
                let r = await fetch(`http://localhost:5000/applicants`, 
                {method: "POST", body: formData, signal: ctrl.signal});
                console.log("HTTP response code",r.status)
            }
            catch(e)
            {
                console.log("We messed up");
            }
        }
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