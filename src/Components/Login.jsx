import React, { useState } from 'react';
import './Login.css';
import Home from "./Elementos/Home";
import { Link } from "react-router-dom";

function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = (e) => {
    //Prevent page reload
    e.preventDefault();
  
    var { uname, pass } = document.forms[0];
  
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
  
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  
  const database = [
    {
      username: "admin",
      password: "admin"
    },
    
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="title"><h2>Iniciar sesión</h2></div>
        <div className="input-container">
          <input type="text" placeholder="Usuario" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <input type="password" placeholder="Contraseña" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
            <button className='loginButton'>Continuar</button>
        </div>
      </form>
    </div>
  );

 return (
    <div className="login-form">
      {isSubmitted ? <Link to="/home" component={Home} /> : renderForm}
    </div>
  );
  
};export default Login;