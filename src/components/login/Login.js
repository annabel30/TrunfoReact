import "./Login.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import Paimon from "../../img/Extras/paimon.png";
import { AuthenticationService } from "../../service/AuthenticationService";

function Login() {

  const [player, setPlayer] = useState({
    "username": "",
    "password": ""
  });

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value })
  }

  const verifyInfo = async (event) => {

    event.preventDefault()

    try {
      const response = await AuthenticationService.login(player)
      console.log(response.data);
      localStorage.setItem("nameUser", player.username);
      alert("logado :D")
      window.location.href = '/home';
    } catch (error) {
      alert("Nome ou senha incorretos!");
      console.error(error);
      window.location.reload();
    }
  }

  return (
    <div className='boxPageLogin'>
      <div className='pageLogin'>
        <h1 className='titleLogin'>Login</h1>
        <Form className='bloco' onSubmit={verifyInfo}>
          <Form.Group className="inputsLogin" id="formNameLoginPlayer">
            <Form.Label>Nome do Viajante</Form.Label>
            <Form.Control id='nameInput' type="text" placeholder="Insira o nome" name="username" value={player.username} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="inputsLogin" id="formPasswordLoginPlayer">
            <Form.Label>Senha</Form.Label>
            <Form.Control id='passwordInput' type="password" placeholder="Insira a senha" name="password" value={player.password} onChange={handleChange} />
          </Form.Group>

          <Button className='botao' variant="primary" type="submit" onClick={verifyInfo}>
            Transportar
          </Button>
        </Form>
        <a className='aTravel' href="./cadastroJogador">
          <div className='boxSemLogin'>
            <img className='paimonLogin' src={Paimon} alt='' ></img>
            <div>
              <p>Não possui perfil?</p>
              <p>Cadastre-se!</p>
            </div>
          </div>
        </a>
      </div>
    </div >
  );

}

export default Login;