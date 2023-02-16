import '../App.css';
import NavBar from "../navigation/NavBar";

function Home() {
 
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
