import "./Login.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PlayerService } from '../../service';
import { useState } from 'react';

import Paimon from "../../img/Extras/paimon.png";

function Login() {

  // const [player, setPlayer] = useState([])
  // const [path, setPath] = useState("");
  // let passwordBD

  function verifyInfo(event) {
    // event.preventDefault()
    const name = document.getElementById("nameInput").value;
    const password = document.getElementById("passwordInput").value;
    localStorage.setItem("nameUser", name);

    // if (name !== "" && password !== "") {
    //   PlayerService.login(name, password).then(resposta => {
    //     setPlayer(resposta.data)
    //     console.log(resposta)
    //     console.log(passwordBD === password)
    //     passwordBD = resposta.data.password
    //   }).catch(erro =>
    //     console.log(erro)
    //   )
    //   if (passwordBD === password) {
    //     setPath("./home");
    //   } else {
    //     alert("Nome ou senha incorretos!");
    //     setPath("./");
    //   }
    // } else {
    //   alert("Insira todos os valores!");
    //   setPath("./");
    // }

    //   try {
    //     PlayerService.login(name, password).then(resposta => {
    //       setPlayer(resposta.data)
    //       console.log(resposta)
    //       passwordBD = resposta.data.password
    //       alert(resposta)
    //     }).catch(erro =>
    //       console.log(erro)
    //       )
    //     } catch (erro){
    //       console.log(erro)
    //     }

    //     console.log(passwordBD)
    //   if (passwordBD === password){
    //     path = "./home"
    //   } else {
    //     alert("Nome ou senha incorretos!");
    //     path = "./"
    //   }

    // } else {
    //   alert("Insira todos os valores!");
    //   path = "./"
    // }
  }

  return (
    <div className='boxPageLogin'>
      <div className='pageLogin'>
        <h1 className='titleLogin'>Login</h1>
        <Form className='bloco'>
          <Form.Group className="inputsLogin" id="formNameLoginPlayer">
            <Form.Label>Nome do Viajante</Form.Label>
            <Form.Control id='nameInput' type="text" placeholder="Insira o nome" />
          </Form.Group>

          <Form.Group className="inputsLogin" id="formPasswordLoginPlayer">
            <Form.Label>Senha</Form.Label>
            <Form.Control id='passwordInput' type="password" placeholder="Insira a senha" />
          </Form.Group>

          <Button className='botao' variant="primary" type="submit" onClick={verifyInfo} href="./home">
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