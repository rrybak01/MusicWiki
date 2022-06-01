import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { Users } from "../Data/Users";
import "./Login.css";

export default function Login(){
  
  const history = useHistory();
  const nameInput = useRef();
  const pwdInput = useRef();

  const logUser = () => {

    const user = Users.find(item => item.name === nameInput.current.value && item.password === pwdInput.current.value);

    if (user !== undefined) {
      localStorage.setItem('loggedUser', user.name);
      history.push("/perfil/usuario");
    }
  }

  return (
    <div className="contenedorLogin">
      <Container className="login-form">
        <h1>Inicio de sesión</h1>
        <Form className="form">
          <Form.Group className="input-container" controlId="formBasicEmail">
            <p className='text'>Nombre de usuario</p>
            <Form.Control className="input" ref={nameInput} type="text" placeholder="Usuario" />
          </Form.Group>
          <Form.Group className="input-container" controlId="formBasicPassword">
            <p className='text'>Contraseña</p>
            <Form.Control className="input" ref={pwdInput} type="password" placeholder="Contraseña" />
            </Form.Group>
          <div className="button-container">
              <button onClick={logUser} className="botonLogin">Login</button>
          </div>
        </Form>
      </Container>
    </div>
  );
}