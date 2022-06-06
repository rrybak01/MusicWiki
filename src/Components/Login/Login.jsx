import React, { useState } from 'react';
import './Login.css';

function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = (e) => {
    
    e.preventDefault();
    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);
    
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const unlog = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
  }

  const database = [
    {
      username: "admin",
      password: "admin",
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

  const loggedInfo = (
    <div className='form'>
      <img src="https://pbs.twimg.com/media/FUZ8utHWQAIsHEM.jpg:large" className='imagenPerfil' alt="liverpol"/>
      <p>Bienvenido!🤙</p>
      <button onClick={unlog} className='loginButton'>Cerrar sesión</button>
    </div>
  );

 return (
    <div className="login-form">
      {isSubmitted ? loggedInfo : renderForm}
    </div>
  );

};export default Login;