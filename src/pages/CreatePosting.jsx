import '../App.css';
import NavBar from '../navigation/NavBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel } from '@mui/material';
import React, {useState, useEffect} from 'react';
import store from '../store';
//import { useHistory } from 'react-router';

function CreatePosting(){
    const [Class, setClass] = useState('');
    const [SectionID, setSectionID] = useState('');
    const [JobTitle, setJobTitle] = useState('');
    const [is_GTA_Required, setIs_GTA_Required] = useState(false);
    //const history = useHistory();

    const adminName = store.getState().auth.user.decoded.name;

    async function checkDuplicateClass(){
        let response = await fetch(`http://localhost:5000/find-class?class=${Class}&section=${SectionID}`, {method: 'GET'});
        let classFound = await response.json();
        if(classFound.length > 0){
            return true;
        }
        else{
            return false;
        }

    }

    async function createPosting(){
        let isClassFound = checkDuplicateClass();
        let data ={
            class : Class,
            section : SectionID,
            job : JobTitle,
            admin : adminName,
            isGTARequired : is_GTA_Required
        };
        if(Class === '' || SectionID === ''){
            return;
        }
        /*
        else if(isClassFound){
            if(JobTitle === "GTA"){
                alert('posting created!');
                const ctrl = new AbortController();
                setTimeout(() => ctrl.abort(), 5000);
                try{
                    let request = await fetch("http://localhost:5000/create-gta-posting",
                    {method: 'POST',
                     headers: {'Content-Type': 'application/json'},
                     body: JSON.stringify({class: data.class, section: data.section, job: data.job, isGTARequired: data.isGTARequired}),
                     signal: ctrl.signal})
                    console.log("HTTP response code", request.status);
                }catch(e){
                    console.log("something went wrong");

                }

            }


        }
        */
        else{
            alert('posting created!');
            const ctrl = new AbortController();
            setTimeout(() => ctrl.abort(), 5000);
            try{
                let request = await fetch("http://localhost:5000/create-initial-posting", 
                {method: 'POST', 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(data), 
                signal: ctrl.signal});
                console.log("HTTP response code", request.status);
            }
            catch(e){
                console.log("something went wrong");
            }

        }
    }



    return(
        <div className="App">
            <div>
                <NavBar/>
            </div>
            <h1>Create Posting</h1>
            <br></br>
            <Box 
            component={"form"} 
            sx={{'& .MuiTextField-root' : {m: 1, width: '25ch'},
            }} 
            noValidate
            autoComplete="off"
            >
                <TextField size='small' value={Class} onChange={(event) => setClass(event.target.value)} required id='outlined-required' label='Enter Class' placeholder='Enter Class'/>
                <TextField size='small' value={SectionID} onChange={(event) => setSectionID(event.target.value)} required id='outlined-required' label='Enter Section' placeholder='Enter Section'/>
                <TextField size='small' value={JobTitle} onChange={(event) => {setJobTitle(event.target.value)}} required id='outlined-required' label='Enter Job Title' placeholder='Enter Job Title'/>
                <FormControlLabel control={<Checkbox onChange={() => setIs_GTA_Required(!is_GTA_Required)} />} label="Is GTA Required?"/>
                <Button onClick={createPosting} variant='contained'>Add Posting</Button>
            </Box>
            




        </div>
    )
}
export default CreatePosting;