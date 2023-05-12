import "./MostrarJogador.css";

import Navbar from "../navbar/Navbar";

import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PlayerService } from '../../service';
import { useState, useEffect } from 'react';

// profile images
import profileLumine from "../../img/Profile/profile_lumine.png";
import profileAether from "../../img/Profile/profile_aether.png";

// element images
import Anemo from "../../img/Elements/Players/AnemoWhite.png";
import Cryo from "../../img/Elements/Players/CryoWhite.png";
import Dendro from "../../img/Elements/Players/DendroWhite.png";
import Electro from "../../img/Elements/Players/ElectroWhite.png";
import Geo from "../../img/Elements/Players/GeoWhite.png";
import Hydro from "../../img/Elements/Players/HydroWhite.png";
import Pyro from "../../img/Elements/Players/PyroWhite.png";

// backgrounds images
import AnemoBackground from "../../img/Backgrounds/BackgroundsTraveler/wallpaperTravelerAnemo.jpg";
import CryoBackground from "../../img/Backgrounds/BackgroundsTraveler/wallpaperTravelerCryo.jpg";
import DendroBackground from "../../img/Backgrounds/BackgroundsTraveler/wallpaperTravelerDendro.jpg";
import ElectroBackground from "../../img/Backgrounds/BackgroundsTraveler/wallpaperTravelerElectro.jpg";
import GeoBackground from "../../img/Backgrounds/BackgroundsTraveler/wallpaperTravelerGeo.jpg";
import HydroBackground from "../../img/Backgrounds/BackgroundsTraveler/wallpaperTravelerHydro.jpg";
import PyroBackground from "../../img/Backgrounds/BackgroundsTraveler/wallpaperTravelerPyro.jpg";

// extra images
import linesTeyvat from "../../img/Extras/linesTeyvat.png";

function MostrarJogador() {

  const [player, setPlayer] = useState([])
  const name = localStorage.getItem("nameUser")

  useEffect(() => {
    PlayerService.buscarPorNome(name).then(resposta => {
      setPlayer(resposta.data)
    }).catch(erro =>
      console.log(erro)
    )
  }, [name])

  function remover(){
    PlayerService.deletar(player.idPlayer)
  }

  // ---------- DEFINIR BACKGROUND E CORES ------------
  function definePageColors(){
    if (player.element === "Anemo"){
      return "33, 94, 105"
    } else if (player.element === "Cryo"){
      return "88, 144, 201"
    } else if (player.element === "Dendro"){
      return "106, 161, 127"
    } else if (player.element === "Electro"){
      return "156, 67, 192"
    } else if (player.element === "Geo"){
      return "223, 173, 88"
    } else if (player.element === "Hydro"){
      return "37, 150, 190"
    } else {
      return "165, 46, 15"
    }
  }

  function definePageBackground(){
    if (player.element === "Anemo"){
      return AnemoBackground
    } else if (player.element === "Cryo"){
      return CryoBackground
    } else if (player.element === "Dendro"){
      return DendroBackground
    } else if (player.element === "Electro"){
      return ElectroBackground
    } else if (player.element === "Geo"){
      return GeoBackground
    } else if (player.element === "Hydro"){
      return HydroBackground
    } else {
      return PyroBackground
    }
  }
  // ---------- DEFINIR BACKGROUND E CORES ------------

  // --------------- DEFINIR IMAGENS ------------------
  function defineElementImage(){
    if (player.element === "Anemo"){
      return Anemo
    } else if (player.element === "Cryo"){
      return Cryo
    } else if (player.element === "Dendro"){
      return Dendro
    } else if (player.element === "Electro"){
      return Electro
    } else if (player.element === "Geo"){
      return Geo
    } else if (player.element === "Hydro"){
      return Hydro
    } else {
      return Pyro
    }
  }

  function defineProfileImage(){
    if (player.gender === 'F'){
      return profileLumine
    } else {
      return profileAether
    }
  }
  // --------------- DEFINIR IMAGENS ------------------

  // --------------------- MODAIS ---------------------
  const [modalStates, setModalStates] = useState({
    modal1: false,
    modal2: false
  });

  const toggleModal = (modalName) => {
    setModalStates({
      ...modalStates,
      [modalName]: !modalStates[modalName],
    });
  };
  // --------------------- MODAIS ---------------------

  return (
    <>
      <Navbar />
      <div className="mostrarJogadorWallpaper" style={{backgroundImage: `url(${definePageBackground()})`}}></div>
      <div className="boxMostrarJogadorPage">
        <h1 className="titleMostrarJogador">Perfil de Viajante de Teyvat</h1>
        <div className="boxJogador">
          <div className="boxMostrarJogador" style={{backgroundColor: `rgba(${definePageColors()}, 0.4)`}}>
            <div className="mostrarJogadorIdRowBox">
              <img className="profileImageExtras" src={defineElementImage()} alt=""></img>
              <img className="imageLinesIdCard" src={linesTeyvat} alt=""></img>
            </div>
            <div className="mostrarJogadorIdRowBox">
              <p className="travelerIdInfo">EXP: 10/11/23</p>
              <div className="travelerTextIdBox">
                <p className="travelerIdTitle">TRAVELER IDENTIFICATION</p>
                <p className="travelerIdInfo">LYE801925</p>
              </div>
            </div>
            <img className="profileImage" src={defineProfileImage()} alt=""></img>
            <div className="infoPlayer">
              <div className="infoLinePlayerName">
                <p className="aliasTravelerTitle">"THE 4TH DESCENDER" {player.name}</p>
                <p>{player.region}, Teyvat</p>
              </div>
              <div className="infoLinePlayer">
                <p className="infoLinePlayerTitle">AGE: </p><p>{player.age}</p>
              </div>
              <div className="infoLinePlayer">
                <p className="infoLinePlayerTitle">SEX: </p><p>{player.gender}</p>
              </div>
              <div className="infoLinePlayer">
                <p className="infoLinePlayerTitle">HAIR: </p><p>BLONDE</p>
              </div>
              <div className="infoLinePlayer">
                <p className="infoLinePlayerTitle">EYES: </p><p>AMBER</p>
              </div>
              <div className="infoLinePlayer">
                <p className="infoLinePlayerTitle">HEIGHT: </p><p>5'6"</p>
              </div>
              <div className="infoLinePlayer">
                <p className="infoLinePlayerTitle">WEIGHT: </p><p>119 lbs</p>
              </div>
              <div className="infoLinePlayer">
                <p className="infoLinePlayerTitle">WEAPON: </p><p>{player.weapon}</p>
              </div>
            </div>
          </div>
          <div className="boxOpcoesJogador">
            <a className="aTravel" href="./dadosJogosJogador">
              <div className="buttonOpcoesJogador" style={{backgroundColor: `rgba(${definePageColors()})`}}>Diário de Viajante</div>
            </a>
            <a className="aTravel" href="./editarJogador">
              <div className="buttonOpcoesJogador" style={{backgroundColor: `rgba(${definePageColors()})`}}>Editar dados</div>
            </a>

            <Button className="buttonOpcoesJogador" onClick={() => toggleModal('modal1')}>Logout</Button>
            <Modal show={modalStates.modal1} onHide={() => toggleModal('modal1')}>
              <Modal.Header>
                <Modal.Title>Tem certeza que deseja sair?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Vai mesmo acabar assim hoje?</p>
                <p>Todos os dados de sua jornada por Teyvat ainda estarão aqui quando você voltar!</p>
                <p>Até mais!</p>
              </Modal.Body>
              <Modal.Footer>
                <a className="aTravelModal" href="./">
                  <Button className="buttonModalLeave" onClick={() => toggleModal('modal1')}>Sim, quero sair!</Button>
                </a>
                <Button className="buttonModalCancel" onClick={() => toggleModal('modal1')}>Não, eu errei!</Button>
              </Modal.Footer>
            </Modal>

            <Button className="buttonOpcoesJogador" onClick={() => toggleModal('modal2')}>Remover conta</Button>
            <Modal show={modalStates.modal2} onHide={() => toggleModal('modal2')}>
              <Modal.Header>
                <Modal.Title>Tem certeza que deseja REMOVER sua conta?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Vai mesmo apagar TODOS os dados de sua aventura inesquecível por Teyvat?</p>
                <p>Seu covarde! Vai ser comido por slimes!!!</p>
                <p>Que seu próximo 5* seja a Qiqi :3</p>
              </Modal.Body>
              <Modal.Footer>
                <a className="aTravelModal" href="./">
                  <Button className="buttonModalLeave" onClick={() => { toggleModal('modal2'); remover(); }}>Sim, sou um bosta!</Button>
                </a>
                <Button className="buttonModalCancel" onClick={() => toggleModal('modal2')}>Não, jamais sairei!</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default MostrarJogador;


// ----------------- ATENCAO ---------------------
// componentizar id perfil
// ----------------- ATENCAO ---------------------


// border: 30px solid transparent;
// font-size: 40px;
// background-color: rgb(150, 215, 255);
// border-image: url("./132d0b11f96dcffaa700966900312a52.jpg") 150 round;