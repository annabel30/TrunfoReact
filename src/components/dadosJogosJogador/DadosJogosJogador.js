import "./DadosJogosJogador.css";

import Navbar from "../navbar/Navbar";

import React from 'react';
import { PlayerService } from '../../service';
import { useState, useEffect } from 'react';

import ChibiHappy from '../../img/Extras/chibiVictories.png';
import ChibiSad from '../../img/Extras/chibiDefeats.png';

function DadosJogosJogador() {

    const [player, setPlayer] = useState([])
    const name = localStorage.getItem("nameUser")

    useEffect(() => {
        PlayerService.buscarPorNome(name).then(resposta => {
            setPlayer(resposta.data)
        }).catch(erro =>
            console.log(erro)
        )
    }, [name])

    return (
        <>
            <Navbar />
            <div className="dadosJogosJogadorWallpaper"></div>
            <a className='aLogin' href='./MostrarJogador'>
                <div className='optionVoltarPerfilJogador'>Voltar para o perfil</div>
            </a>
            <div className="pageDadosJogosJogador">
                <h1 className="titleMostrarJogador">Diário de Viajante</h1>
                <div className="boxDataPlayer">
                    <div className="bannerYelan"></div>
                    <div className="boxBookDataPlayers">
                        <div className="boxVDDados">
                            <div className="boxVictories">
                                <p className="textVD">Vitórias:</p><p className="textVD">{player.victories}</p>
                            </div>
                            <div className="boxDefeats">
                                <p className="textVD">Derrotas:</p><p className="textVD">{player.defeats}</p>
                            </div>
                            <img className="chibiImageDataPlayers" src={ChibiHappy} alt=""></img>
                            <img className="chibiImageDataPlayers" src={ChibiSad} alt=""></img>
                        </div>
                    </div>
                    <div className="bannerYelan"></div>
                </div>
            </div>
        </>
    )
}

export default DadosJogosJogador;