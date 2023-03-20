import '../App.css';
import NavBar from "../navigation/NavBar";

function Home() {
<<<<<<< Updated upstream
 
=======
  const [cardInfo, setCardInfo] = useState([]);
  useEffect(() => {
    async function getClasses(){
      const response = await fetch(`http://localhost:5000/home`);
      if(response.ok){
        //const message = `An error occurred: ${response.statusText}`;
        //window.alert(message);
        let cardInfo = await response.json()
        setCardInfo(cardInfo);
        return;
      }
      
    }
    getClasses();
    return;
  }, [cardInfo.length])
  //console.log(cardInfo);

  //Link to source of style of code: https://mui.com/material-ui/react-card/
  function classList(){
    return cardInfo.map((card) => {
      return (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box display='inline-block'>
              <Card sx={{minWidth: 275}}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {`Section ID: `+card.sectionID}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {card.className}
                  </Typography>
                  <CardActions>
                    <Link to={{pathname: '/postings', state: {card: card}}}>
                      <Button size="small">See Postings</Button>
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
        /*
        <Box display='inline-block'>
          <Card sx={{minWidth: 275}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {`Section ID: `+card.sectionID}
              </Typography>
              <Typography variant="h5" component="div">
                {card.className}
              </Typography>
              <CardActions>
                <Link to={{pathname: '/postings', state: {card: card}}}>
                  <Button size="small">See Postings</Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        */
      )
    })
  }

>>>>>>> Stashed changes
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <input placeholder="Name..." 
      />
      <input type="number" 
      placeholder="Age..."
      />
    </div>
  );
}

export default Home;
