import "./CadastroJogador.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { PlayerService } from '../../service';
import { useState } from 'react';

function CadastroJogador() {

  const [player, setPlayer] = useState({
    "name": "",
    "age": 0,
    "gender": "",
    "region": "",
    "element": "",
    "weapon": "",
    "password": 0
  })

  const atualizaPlayer = (event) => {
    setPlayer({...player, [event.target.name] : event.target.value})
  }

  function mostrarAlertCadastroJogador() {

    let verifyPassword = document.getElementById("confirmPasswordJogadorInput")
    
    if (player.name !== '' && player.age !== ''
      && player.gender !== '' && player.region !== ''
      && player.element !== '' && player.weapon !== ''
      && player.password !== '') {
      if (player.password === verifyPassword.value) {
        alert("Cadastro efetuado!");
        window.location.href = '/';
      } else {
        alert("Senhas não compatíveis");
      }
    } else {
      alert("Insira todos os valores");
    }
  }

  const cadastrar = (event) => {
    event.preventDefault()
    mostrarAlertCadastroJogador()
    PlayerService.cadastrar(player)
  }

  return (
    <>
      <a className='aLogin' href='./'>
        <div className='optionVoltarJogador'>Voltar para o login</div>
      </a>
      <div className='pageCadastrarJogador'>
        <h1 className='titleCadastrarJogador'>Cadastrar Viajante</h1>
        <Form className='boxJogadorCadastro' onSubmit={cadastrar}>
          <Form.Group className="mb-3" id="formNamePlayer">
            <Form.Label>Nome do viajante</Form.Label>
            <Form.Control type="text" placeholder="Insira o nome" id='nomeJogadorInput' 
            name ='name' onChange={atualizaPlayer} value={player.name} />
          </Form.Group>

          <Form.Group className="mb-3" id="formAgePlayer">
            <Form.Label>Idade</Form.Label>
            <Form.Control type="number" placeholder="Idade" id='idadeJogadorInput'
            name ='age' onChange={atualizaPlayer} value={player.age} />
          </Form.Group>

          <Form.Group className="mb-3" id="formGenderPlayer">
            <Form.Select className='selectGenderPlayer' id='generoJogadorInput'
            name ='gender' onChange={atualizaPlayer} value={player.gender}>
              <option defaultValue={''} disabled hidden value="">Gênero</option>
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select className='selectRegionPlayer' id='regionJogadorInput'
            name ='region' onChange={atualizaPlayer} value={player.region}>
              <option defaultValue={''} disabled hidden value="">Região</option>
              <option value="Mondstadt">Mondstadt</option>
              <option value="Liyue">Liyue</option>
              <option value="Inazuma">Inazuma</option>
              <option value="Sumeru">Sumeru</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select className='selectElementPlayer' id='elementJogadorInput'
            name ='element' onChange={atualizaPlayer} value={player.element}>
              <option defaultValue={''} disabled hidden value="">Elemento</option>
              <option value="Anemo">Anemo</option>
              <option value="Cryo">Cryo</option>
              <option value="Dendro">Dendro</option>
              <option value="Electro">Electro</option>
              <option value="Geo">Geo</option>
              <option value="Hydro">Hydro</option>
              <option value="Pyro">Pyro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select className='selectWeaponPlayer' id='weaponJogadorInput'
            name ='weapon' onChange={atualizaPlayer} value={player.weapon}>
              <option defaultValue={''} disabled hidden value="">Arma</option>
              <option value="Bow">Bow</option>
              <option value="Catalyst">Catalyst</option>
              <option value="Claymore">Claymore</option>
              <option value="Polearm">Polearm</option>
              <option value="Sword">Sword</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" id="formPasswordPlayer">
            <Form.Label>Criar senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" id='passwordJogadorInput'
            name ='password' onChange={atualizaPlayer} value={player.password} />
          </Form.Group>

          <Form.Group className="mb-3" id="formConfirmPasswordPlayer">
            <Form.Label>Confirmar senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" id='confirmPasswordJogadorInput'/>
          </Form.Group>

          <Button className='botaoAdicionarJogador' variant="primary" type="submit" onClick={cadastrar}>
            Adicionar
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CadastroJogador;