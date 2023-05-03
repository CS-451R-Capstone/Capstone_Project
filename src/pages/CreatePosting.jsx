import '../App.css';
import NavBar from '../navigation/NavBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel } from '@mui/material';

function CreatePosting(){
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
                <TextField size='small' required id='outlined-required' label='Enter Class' placeholder='Enter Class'/>
                <TextField size='small' required id='outlined-required' label='Enter Section' placeholder='Enter Section'/>
                <TextField size='small' required id='outlined-required' label='Enter Job Title' placeholder='Enter Job Title'/>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Is GTA Required?"/>
                <Button variant='contained'>Add Posting</Button>
            </Box>
            




        </div>
    )
}
export default CreatePosting;