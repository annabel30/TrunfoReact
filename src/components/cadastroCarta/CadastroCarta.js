import "./CadastroCarta.css";

import Navbar from "../navbar/Navbar";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CardService } from '../../service';
import { useState } from 'react';

function CadastroCarta() {

  const [card, setCard] = useState({
    "name": "",
    "atk": 0,
    "criticalRate": 0,
    "criticalDamage": 0,
    "elementalMastery": 0,
    "energyRecharge": 0,
    "element": "",
    "region": "",
    "image": ""
  })

  const atualizaCard = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value })
  }

  const cadastrar = (event) => {
    event.preventDefault()
    CardService.cadastrar(card)
  }

  return (
    <>
      <Navbar />
      <div className='cadastroCartaWallpaper'></div>
      <div className='pageCadastroCarta'>
        <h1 className='tituloCadastroCarta'>Cadastrar carta</h1>
        <Form className='boxCartaCadastro' onSubmit={cadastrar}>
          <div className='boxInputCartaCadastro'>

            <Form.Group className="mb-3" id="formNameCard">
              <Form.Label>Nome da carta</Form.Label>
              <Form.Control type="text" placeholder="Insira o nome" id='nomeCartaInput'
                name='name' onChange={atualizaCard} value={card.name} />
            </Form.Group>

            <Form.Group className="mb-3" id="formAtkCard">
              <Form.Label>Atk</Form.Label>
              <Form.Control type="number" placeholder="Atk" id='atkCartaInput'
                name='atk' onChange={atualizaCard} value={card.atk} />
            </Form.Group>

            <Form.Group className="mb-3" id="formCritRateCard">
              <Form.Label>Critical Rate</Form.Label>
              <Form.Control type="number" placeholder="Critical Rate" id='critRateCartaInput'
                name='criticalRate' onChange={atualizaCard} value={card.criticalRate} />
            </Form.Group>

            <Form.Group className="mb-3" id="formCritDmgCard">
              <Form.Label>Critical Damage</Form.Label>
              <Form.Control type="number" placeholder="Critical Damage" id='critDmgCartaInput'
                name='criticalDamage' onChange={atualizaCard} value={card.criticalDamage} />
            </Form.Group>

            <Form.Group className="mb-3" id="formElMasteryCard">
              <Form.Label>Elemental Mastery</Form.Label>
              <Form.Control type="number" placeholder="Elemental Mastery" id='elMasteryCartaInput'
                name='elementalMastery' onChange={atualizaCard} value={card.elementalMastery} />
            </Form.Group>

            <Form.Group className="mb-3" id="formEnRechargeCard">
              <Form.Label>Energy Recharge</Form.Label>
              <Form.Control type="number" placeholder="Energy Recharge" id='enRechargeCartaInput'
                name='energyRecharge' onChange={atualizaCard} value={card.energyRecharge} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select className='selectElementCard'
                name='element' onChange={atualizaCard} value={card.element}>
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
              <Form.Select className='selectRegionCard'
                name='region' onChange={atualizaCard} value={card.region}>
                <option defaultValue={''} disabled hidden value="">Região</option>
                <option value="Mondstadt">Mondstadt</option>
                <option value="Liyue">Liyue</option>
                <option value="Inazuma">Inazuma</option>
                <option value="Sumeru">Sumeru</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="imageCardCreate" id="formImageCard">
              <Form.Control type="text" placeholder="Link da imagem" id='imageInput'
                name='image' onChange={atualizaCard} value={card.image} />
            </Form.Group>

          </div>
          <Button className='botaoCadastroCarta' variant="primary" type="submit" onClick={cadastrar}>
            I've been waiting for you for ages~
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CadastroCarta;