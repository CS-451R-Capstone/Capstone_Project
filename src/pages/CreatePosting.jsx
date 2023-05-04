import '../App.css';
import NavBar from '../navigation/NavBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel } from '@mui/material';
import React, {useState, useEffect} from 'react';
import store from '../store';
import { useHistory } from 'react-router';

function CreatePosting(){
    const [Class, setClass] = useState('');
    const [SectionID, setSectionID] = useState('');
    const [JobTitle, setJobTitle] = useState('');
    const [is_GTA_Required, setIs_GTA_Required] = useState(false);
    const [unlockButton, setUnlockButton] = useState(true);
    const history = useHistory();

    const adminName = store.getState().auth.user.name;

    async function createPosting(){
        if(Class === '' || SectionID === ''){
            return;
        }
        else{
            alert('posting created!');
            let data = new FormData();
            const ctrl = new AbortController();
            setTimeout(() => ctrl.abort(), 5000);
            data.append("class", Class);
            data.append("section", SectionID);
            data.append("admin", adminName);
            data.append("job", JobTitle);
            data.append("isGTARequired", is_GTA_Required);
            try{
                let request = await fetch("http://localhost:5000/create-posting", {method: 'POST', body: data, signal: ctrl.signal});
                console.log("HTTP response code", request.status);
            }
            catch(e){
                console.log("something went wrong");
            }
            //history.push('/my-account');


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
                <TextField size='small' onChange={(event) => setClass(event.target.value)} required id='outlined-required' label='Enter Class' placeholder='Enter Class'/>
                <TextField size='small' onChange={(event) => setSectionID(event.target.value)} required id='outlined-required' label='Enter Section' placeholder='Enter Section'/>
                <TextField size='small' onChange={(event) => {setJobTitle(event.target.value); setUnlockButton(!unlockButton)}} required id='outlined-required' label='Enter Job Title' placeholder='Enter Job Title'/>
                <FormControlLabel control={<Checkbox onChange={() => setIs_GTA_Required(!is_GTA_Required)} />} label="Is GTA Required?"/>
                <Button onClick={createPosting} variant='contained' disabled={unlockButton}>Add Posting</Button>
            </Box>
            




        </div>
    )
}
export default CreatePosting;