import "./Carta.css"

import Anemo from "../../img/Elements/Cards/Anemo.png";
import Cryo from "../../img/Elements/Cards/Cryo.png";
import Dendro from "../../img/Elements/Cards/Dendro.png";
import Electro from "../../img/Elements/Cards/Electro.png";
import Geo from "../../img/Elements/Cards/Geo.png";
import Hydro from "../../img/Elements/Cards/Hydro.png";
import Pyro from "../../img/Elements/Cards/Pyro.png";

const Carta = ({ carta }) => {

    // retorna a imagem do elemento
    function returnElementImage() {
        if (carta.element === 'Pyro') {
            return Pyro;
        } else if (carta.element === 'Cryo') {
            return Cryo;
        } else if (carta.element === 'Dendro') {
            return Dendro;
        } else if (carta.element === 'Anemo') {
            return Anemo;
        } else if (carta.element === 'Electro') {
            return Electro;
        } else if (carta.element === 'Geo') {
            return Geo;
        } else if (carta.element === 'Hydro') {
            return Hydro;
        }
    }

    // retorna a cor de fundo
    function returnColor() {
        if (carta.element === 'Pyro') {
            return '247,176,91';
        } else if (carta.element === 'Cryo') {
            return '165, 196, 212';
        } else if (carta.element === 'Dendro') {
            return '106, 142, 127';
        } else if (carta.element === 'Anemo') {
            return '105, 160, 164';
        } else if (carta.element === 'Electro') {
            return '90, 62, 148';
        } else if (carta.element === 'Geo') {
            return '223, 181, 108';
        } else {
            return '91, 167, 199';
        }
    }

    // retorna a cor dos atributos
    function returnAttributeColor() {
        if (carta.element === 'Pyro') {
            return '#48231A';
        } else if (carta.element === 'Cryo') {
            return '#26305B';
        } else if (carta.element === 'Dendro') {
            return '#193332';
        } else if (carta.element === 'Anemo') {
            return '#162939';
        } else if (carta.element === 'Electro') {
            return '#221839';
        } else if (carta.element === 'Geo') {
            return '#2A1A13';
        } else {
            return '#23286D';
        }
    }

    // if (!carta || !carta.image) {
    //     return null;
    // }

    return (
        <div className="boxCard">
            <div className="cardModel" style={{ backgroundImage: `url(${carta.image})`, borderColor: `rgb(${returnColor()})` }}>
                <div className="elementAndName" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(${returnColor()},0.773546918767507) 23%, rgba(${returnColor()}) 52%)` }}>
                    <img src={returnElementImage()} alt=""></img>
                    <p className="cardName">{carta.name}</p>
                </div>
                <div className="attibutesBox">
                    <div className="attributeBox" style={{ backgroundColor: returnAttributeColor() }}><p>ATK</p><p>{carta.atk}</p></div>
                    <div className="attributeBox" style={{ backgroundColor: returnAttributeColor() }}><p>CRIT RATE</p><p>{carta.criticalRate}</p></div>
                    <div className="attributeBox" style={{ backgroundColor: returnAttributeColor() }}><p>CRIT DAMAGE</p><p>{carta.criticalDamage}</p></div>
                    <div className="attributeBox" style={{ backgroundColor: returnAttributeColor() }}><p>ELEM. MASTERY</p><p>{carta.elementalMastery}</p></div>
                    <div className="attributeBox" style={{ backgroundColor: returnAttributeColor() }}><p>ENERGY RECHARGE</p><p>{carta.energyRecharge}</p></div>
                </div>
            </div>
        </div>
    )

}

export default Carta;