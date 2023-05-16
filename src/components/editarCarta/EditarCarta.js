import "./EditarCarta.css";

import Navbar from "../navbar/Navbar";
import SelectCartas from '../selectCartas/SelectCartas';

import { Button, Form } from 'react-bootstrap';
import React from 'react';
import { CardService } from '../../service';
import { useState, useEffect } from 'react';

function EditarCarta() {

    const [card, setCard] = useState([])
    const [selectValue, setSelectValue] = useState(1);

    useEffect(() => {
        CardService.buscarUmaCard(selectValue).then(resposta => {
            setCard(resposta.data)
        }).catch(erro =>
            console.log(erro)
        )
    }, [selectValue])

    const atualizaCard = (event) => {
        setCard({ ...card, [event.target.name]: event.target.value })
    }

    const editar = (event) => {
        event.preventDefault()
        CardService.editar(card.idCard, card)
        alert("Carta editada!")
    }

    return (
        <>
            <Navbar />
            <div className='editarCartaWallpaper'></div>
            <div className='boxEditarCarta'>
                <h1 className='tituloEditarCarta'>Editar carta</h1>
                <Form className='form-edit-card'>

                    <div className="boxChooseCardUpdate">
                        <div className='textEditCard'>Escolha a carta para editar</div>
                        <Form.Select value={selectValue} aria-label="Default select example" className='select-card' onChange={e => setSelectValue(e.target.value)}>
                            <SelectCartas />
                        </Form.Select>
                    </div>

                    <div className="boxUpdateLinkImage">
                        <div className='textEditCard'>Imagem</div>
                        <Form.Group className="imageCardUpdate" id="formImageCard">
                            <Form.Control type="text" placeholder="Link da imagem" id='imageInput'
                                name='image' onChange={atualizaCard} value={card.image} />
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-3" id="formNameCard">
                        <Form.Label>Nome da carta</Form.Label>
                        <Form.Control type="text" defaultValue={card.name} placeholder="Insira o nome"
                            id='nomeCartaInput' name='name' onChange={atualizaCard} value={card.name} />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formAtkCard">
                        <Form.Label>Atk</Form.Label>
                        <Form.Control type="number" defaultValue={card.atk} placeholder="Atk" id='atkCartaInput'
                            name='atk' onChange={atualizaCard} value={card.atk} />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formCritRateCard">
                        <Form.Label>Critical Rate</Form.Label>
                        <Form.Control type="number" defaultValue={card.criticalRate} placeholder="Critical Rate" id='critRateCartaInput'
                            name='criticalRate' onChange={atualizaCard} value={card.criticalRate} />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formCritDmgCard">
                        <Form.Label>Critical Damage</Form.Label>
                        <Form.Control type="number" defaultValue={card.criticalDamage} placeholder="Critical Damage" id='critDmgCartaInput'
                            name='criticalDamage' onChange={atualizaCard} value={card.criticalDamage} />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formElMasteryCard">
                        <Form.Label>Elemental Mastery</Form.Label>
                        <Form.Control type="number" defaultValue={card.elementalMastery} placeholder="Elemental Mastery" id='elMasteryCartaInput'
                            name='elementalMastery' onChange={atualizaCard} value={card.elementalMastery} />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formEnRechargeCard">
                        <Form.Label>Energy Recharge</Form.Label>
                        <Form.Control type="number" defaultValue={card.energyRecharge} placeholder="Energy Recharge" id='enRechargeCartaInput'
                            name='energyRecharge' onChange={atualizaCard} value={card.energyRecharge} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Select className='selectElementCard'
                            name='element' onChange={atualizaCard} value={card.element}>
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
                            <option value="Mondstadt">Mondstadt</option>
                            <option value="Liyue">Liyue</option>
                            <option value="Inazuma">Inazuma</option>
                            <option value="Sumeru">Sumeru</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={editar} className="botaoRemoverCarta">
                        Alterar
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default EditarCarta;