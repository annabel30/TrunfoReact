import "./Jogo.css"

import CardBack from "../../img/Extras/cardBack.png"

function Jogo() {
    return (
        <>
            <div>
                <a className='aLogin' href='./regrasJogo'>
                    <div className='optionVoltarPerfilJogador'>Desistir</div>
                </a>
                <div>Cartas restantes: 0</div>
                <div>Cartas restantes: 0</div>
                <img src={CardBack} className="cardBack" alt="" />
                <img src={CardBack} className="cardBack" alt="" />
            </div>
        </>
    )
}

export default Jogo;