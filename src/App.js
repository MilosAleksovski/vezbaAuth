import React from 'react';
import './App.css';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import './App.css';

function App() {

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token" + response.credential)
    console.log("_____________________________________________________");
    var userObject = jwt_decode(response.credential);
    console.log(JSON.stringify(userObject));
  }


  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"598002730581-0rjg0ghb01nr0jmogdhji02pb74lhlr1.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: 'outline', size : 'large'}
    );

  }, []);

  return (
    <div className="App">
      <div id = "signInDiv"> </div>

    </div>
  );
}

export default App;
