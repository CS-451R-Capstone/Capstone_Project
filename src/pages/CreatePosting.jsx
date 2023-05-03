import '../App.css';
import NavBar from '../navigation/NavBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CheckBox } from '@mui/icons-material';
import Box from '@mui/material/Box';


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
            />




        </div>
    )
}
export default CreatePosting;