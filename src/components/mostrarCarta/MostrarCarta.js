import './MostrarCarta.css';

import Navbar from "../navbar/Navbar";
import SelectCartas from '../selectCartas/SelectCartas';
import Carta from '../carta/Carta';

import { Button, Form } from 'react-bootstrap';
import React from 'react';
import { useState } from "react";
import { v4 } from 'uuid';
import { CardService } from '../../service/CardService';

function MostrarCarta() {

    const [selectValue, setSelectValue] = useState(1);
    const [carta, setCarta] = useState([])

    function mostrar(event){
        event.preventDefault()
        CardService.buscarUmaCard(selectValue).then(resposta => {
            setCarta(resposta.data)
        }).catch(erro =>
            console.log(erro)
        )
    }

    return (
        <>
            <Navbar />
            <div className='mostrarCartaWallpaper'></div>
            <div id='idBoxPageMostrarCarta' className='boxPageMostrarCarta'>
                <Form className='form-show-card'>
                    <div>Escolha a carta para visualizar</div>
                    <Form.Select value={selectValue} aria-label="Default select example" className='select-card' onChange={e => setSelectValue(e.target.value)}>
                        <SelectCartas />
                    </Form.Select>
                    <Button variant="primary" type="submit" onClick={mostrar} className="botaoVerCarta">
                        Buscar
                    </Button>
                </Form>
                {carta && <Carta carta={carta} borderColor={carta.borderColor} attributeColor={carta.attributeColor} key={v4()} />}
            </div>
        </>
    )
}

export default MostrarCarta;