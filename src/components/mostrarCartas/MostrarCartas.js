import "./MostrarCartas.css";

import Navbar from '../navbar/Navbar';
import Carta from '../carta/Carta';

import { v4 } from 'uuid';
import { useEffect, useState } from "react";
import { CardService } from '../../service/CardService';

const MostrarCartas = () => {

  const [card, setCards] = useState([])

  useEffect(() =>  {
    CardService.buscarTodasCards().then(resposta => {
      setCards(resposta.data)
    }).catch(erro =>
      console.log(erro)
    )
  },[])

  return (
    <>
      <Navbar />
      <div>
        <h1>Mostrar cartas</h1>
        <div className="boxBorder">
          <div className="boxCartas">
            <>
              {
                card.map((carta) => <Carta carta={carta} key={v4()} />)
              }
            </>
          </div>
        </div>
      </div>
    </>
  )
}

export default MostrarCartas;