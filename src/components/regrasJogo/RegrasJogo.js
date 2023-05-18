import "./RegrasJogo.css"

import Navbar from "../navbar/Navbar";

function RegrasJogo() {
    return (
        <>
            <Navbar />
            <div className="pageShowRulesGame">
                <div className="boxRulesGame">
                    <h1 className='titleCadastrarJogador'>Regras do Jogo</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                    </p>
                    <a className="aTravel" href="./jogo">
                        <button className='botaoAdicionarJogador' variant="primary" type="submit">
                            Iniciar jogo
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default RegrasJogo;