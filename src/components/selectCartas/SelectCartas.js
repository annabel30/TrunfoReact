import { v4 } from 'uuid';
import { useEffect, useState } from "react";
import { CardService } from '../../service/CardService';

import "./SelectCartas.css";

function SelectCartas() {

    const [list, setCards] = useState([])

    useEffect(() => {
        CardService.buscarTodasCards().then(resposta => {
            setCards(resposta.data)
        }).catch(erro =>
            console.log(erro)
        )
    }, [])

    return (
        <>
            <option defaultValue={''} disabled hidden value="">Carta</option>
            {list.map((item) => (
                <option value={item.idCard} key={v4()}>{item.name}</option>
            ))}
        </>
    )
}

export default SelectCartas;