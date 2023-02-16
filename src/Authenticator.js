

function Auth() 
{
    var myJson = fetch("http://localhost:3002/users").then((response) => response.json());
    console.log(myJson);

}

export default Auth;