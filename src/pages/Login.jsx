import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          UMKC GTA Job Postings
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>

    );
}

const theme = createTheme();


function Login(){

    const location = useLocation();
    const history = useHistory();
    const posting = location.state?.posting;
    const className = location.state?.className;
    const sectionID = location.state?.sectionID;


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    async function requestLogin(userData){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: userData.email, password: userData.password})


        };
        const response = await fetch(`http://localhost:5000/login`, requestOptions);
        if(!response.ok){
            return false
        }
        else if(response.ok){
            return true;
        }

    }


    const handleSubmit = () => {
        const userData = {
            email: email,
            password: password
        };

        const isAuth = requestLogin(userData);
        if(isAuth){
          history.push({
            pathname: '/submission-portal',
            state: {
                posting: posting,
                className: className,
                sectionID: sectionID
            }
          });

        }
        else{
          alert("login failed!");
        }

        
    

        
        
    }

    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={errors.email}
            onError={(event) => setErrors({...errors, [event.target.name]: event.target.error})}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={errors.password}
            onError={(event) => setErrors({...errors, [event.target.name]: event.target.error})}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    )
}
export default Login;
