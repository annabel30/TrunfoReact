import "./Login.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PlayerService } from '../../service';
import { useState } from 'react';

import Paimon from "../../img/Extras/paimon.png";

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const verifyInfo = (event) => {

    event.preventDefault()
    PlayerService.buscarPorNome(username).then((resposta) => {
      if (username == resposta.data.name && password == resposta.data.password) { // eslint-disable-line eqeqeq
        localStorage.setItem("nameUser", username);
        window.location.href = '/home';
      }
    }).catch((erro) => {
      console.log(erro)
      alert("Nome ou senha incorretos!");
      window.location.reload();
    })
  }

  return (
    <div className='boxPageLogin'>
      <div className='pageLogin'>
        <h1 className='titleLogin'>Login</h1>
        <Form className='bloco' onSubmit={verifyInfo}>
          <Form.Group className="inputsLogin" id="formNameLoginPlayer">
            <Form.Label>Nome do Viajante</Form.Label>
            <Form.Control id='nameInput' type="text" placeholder="Insira o nome" value={username} onChange={handleUsernameChange} />
          </Form.Group>

          <Form.Group className="inputsLogin" id="formPasswordLoginPlayer">
            <Form.Label>Senha</Form.Label>
            <Form.Control id='passwordInput' type="password" placeholder="Insira a senha" value={password} onChange={handlePasswordChange} />
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