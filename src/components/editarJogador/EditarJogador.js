import "./EditarJogador.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PlayerService } from '../../service';
import { useState, useEffect } from 'react';

function EditarJogador() {

  const [player, setPlayer] = useState([])
  const name = localStorage.getItem("nameUser")

  useEffect(() => {
    PlayerService.buscarPorNome(name).then(resposta => {
      setPlayer(resposta.data)
    }).catch(erro =>
      console.log(erro)
    )
  }, [name])

  const atualizaPlayer = (event) => {
    setPlayer({ ...player, [event.target.name]: event.target.value })
  }

  const editar = (event) => {
    event.preventDefault()
    PlayerService.editar(player.idPlayer, player)
  }

  return (
    <>
      <a className='aLogin' href='./MostrarJogador'>
        <div className='optionVoltarJogador'>Voltar para o perfil</div>
      </a>
      <div className='pageEditarJogador'>
        <h1 className='titleCadastrarJogador'>Editar Viajante</h1>
        <Form className='boxJogadorCadastro' onSubmit={editar}>
          <Form.Group className="mb-3" id="formNamePlayer">
            <Form.Label>Nome do viajante</Form.Label>
            <Form.Control type="text" defaultValue={player.name} id='nomeJogadorInput'
              name='name' onChange={atualizaPlayer} value={player.name} />
          </Form.Group>

          <Form.Group className="mb-3" id="formAgePlayer">
            <Form.Label>Idade</Form.Label>
            <Form.Control type="number" defaultValue={18} id='idadeJogadorInput'
              name='age' onChange={atualizaPlayer} value={player.age} />
          </Form.Group>

          <Form.Group className="mb-3" id="formGenderPlayer">
            <Form.Select className='selectGenderPlayer' id='generoJogadorInput'
              name='gender' onChange={atualizaPlayer} value={player.gender}>
              <option disabled hidden value="">Gênero</option>
              <option selected value="F">Feminino</option>
              <option value="M">Masculino</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select className='selectRegionPlayer' id='regionJogadorInput'
              name='region' onChange={atualizaPlayer} value={player.region}>
              <option disabled hidden value="">Região</option>
              <option value="Mondstadt">Mondstadt</option>
              <option value="Liyue">Liyue</option>
              <option value="Inazuma">Inazuma</option>
              <option selected value="Sumeru">Sumeru</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select className='selectElementPlayer' id='elementJogadorInput'
              name='element' onChange={atualizaPlayer} value={player.element}>
              <option disabled hidden value="">Elemento</option>
              <option value="Anemo">Anemo</option>
              <option value="Cryo">Cryo</option>
              <option value="Dendro">Dendro</option>
              <option value="Electro">Electro</option>
              <option value="Geo">Geo</option>
              <option selected value="Hydro">Hydro</option>
              <option value="Pyro">Pyro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select className='selectWeaponPlayer' id='weaponJogadorInput'
              name='weapon' onChange={atualizaPlayer} value={player.weapon}>
              <option disabled hidden value="">Arma</option>
              <option value="Bow">Bow</option>
              <option value="Catalyst">Catalyst</option>
              <option value="Claymore">Claymore</option>
              <option value="Polearm">Polearm</option>
              <option selected value="Sword">Sword</option>
            </Form.Select>
          </Form.Group>

          <Button className='botaoAdicionarJogador' variant="primary" type="submit" onClick={editar}>
            Alterar Viajante
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditarJogador;