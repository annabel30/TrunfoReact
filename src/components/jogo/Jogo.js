import "./Jogo.css"

import CardBack from "../../img/Extras/cardBack.png"

import CartaJogo from '../cartaJogo/CartaJogo';

import { v4 } from 'uuid';
import { useEffect, useState } from "react";
import { CardService } from '../../service/CardService';

function Jogo() {

    // ----------------------------- METODOS DECK -----------------------------
    const [card, setCard] = useState([])
    // const [listAllCards, setListAllCards] = useState([])
    const [listCardsOpponent, setListCardsOpponent] = useState([])
    const [listCardsPlayer, setListCardsPlayer] = useState([])
    const [playerCardModel, setPlayerCardModel] = useState(null)
    const [opponentCardModel, setOpponentCardModel] = useState(null)

    // ----------------------------- METODOS JOGO -----------------------------
    const [startedMatch, setStartedMatch] = useState(0);

    useEffect(() => {
        separateCards()
        game()
    }, [])

    useEffect(() => {
        console.log("lista player")
        console.log(listCardsPlayer);
        console.log("lista oponente")
        console.log(listCardsOpponent);
        setCard(listCardsPlayer[0])
    }, [listCardsPlayer, listCardsOpponent]);

    // ----------------------------- METODOS DECK -----------------------------
    const separateCards = () => {
        CardService.buscarTodasCards().then(resposta => {
            setListCardsOpponent([]);
            setListCardsPlayer([]);
            resposta.data.sort(() => Math.random() - 0.5);
            const deckCards = resposta.data;
            // setListAllCards(deckCards)
            for (let i = 0; i < deckCards.length; i++) {
                if (i % 2 === 0) {
                    setListCardsPlayer((prevDeck) => [...prevDeck, deckCards[i]]);
                } else {
                    setListCardsOpponent((prevDeck) => [...prevDeck, deckCards[i]]);
                }
            }
        }).catch(erro =>
            console.log(erro)
        )
    }

    const createModelCards = () => {
        setPlayerCardModel(listCardsPlayer[0]);
        setOpponentCardModel(listCardsOpponent[0]);
    };

    const computerWonRound = () => {
        createModelCards();
        addComputerDeck(playerCardModel);
        removeUserDeck();
        removeComputerDeck();
        addComputerDeck(opponentCardModel);
    };

    const playerWonRound = () => {
        createModelCards();
        addUserDeck(opponentCardModel);
        removeComputerDeck();
        removeUserDeck();
        addUserDeck(playerCardModel);
    };

    const addUserDeck = (card) => {
        setListCardsPlayer((prevDeck) => [...prevDeck, card]);
    };

    const addComputerDeck = (card) => {
        setListCardsOpponent((prevDeck) => [...prevDeck, card]);
    };

    const removeUserDeck = () => {
        setListCardsPlayer((prevDeck) => prevDeck.slice(1));
    };

    const removeComputerDeck = () => {
        setListCardsOpponent((prevDeck) => prevDeck.slice(1));
    };

    // const getUserDeck = () => {
    //     return listCardsPlayer;
    // };

    // const getComputerDeck = () => {
    //     return listCardsOpponent;
    // };

    // ----------------------------- METODOS GAME -----------------------------
    const game = () => {
        setStartedMatch(Math.floor(Math.random() * 2));

        do {
            if (startedMatch === 0) {
                alert("jogador comeca")
                playerPlays();
                setStartedMatch(1);
            } else {
                alert("compute3r comeca")
                computerPlays();
                setStartedMatch(0);
            }
        } while (listCardsOpponent.length !== 0 || listCardsPlayer.length !== 0);

        // if (listCardsPlayer.length === 0) {
        //     setPlayerModel((prevModel) => ({
        //         ...prevModel,
        //         defeats: prevModel.defeats + 1,
        //     }));
        // } else if (listCardsOpponent.length === 0) {
        //     setPlayerModel((prevModel) => ({
        //         ...prevModel,
        //         victories: prevModel.victories + 1,
        //     }));
        // }
    }

    const computerPlays = () => {
        const randomAttribute = Math.floor(Math.random() * 5);
        match(randomAttribute + 1);
    };

    const playerPlays = () => {
        const chosenAttribute = 0; // Set your chosen attribute logic here
        match(chosenAttribute);
    };

    const match = (chosenAtt) => {
        const wonRound = compareAttributes(chosenAtt);

        if (wonRound) {
            playerWonRound();
        } else {
            computerWonRound();
        }
    };

    const compareAttributes = (chosenAtt) => {
        let attributeUserValue = 0;
        let attributeComputerValue = 0;

        switch (chosenAtt) {
            case 1:
                attributeUserValue = playerCardModel.atk;
                attributeComputerValue = opponentCardModel.atk;
                break;
            case 2:
                attributeUserValue = playerCardModel.criticalRate;
                attributeComputerValue = opponentCardModel.criticalRate;
                break;
            case 3:
                attributeUserValue = playerCardModel.criticalDamage;
                attributeComputerValue = opponentCardModel.criticalDamage;
                break;
            case 4:
                attributeUserValue = playerCardModel.elementalMastery;
                attributeComputerValue = opponentCardModel.elementalMastery;
                break;
            case 5:
                attributeUserValue = playerCardModel.energyRecharge;
                attributeComputerValue = opponentCardModel.energyRecharge;
                break;
        }

        if (attributeUserValue > attributeComputerValue) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            <div className='jogoWallpaper'></div>
            <a className='aLogin' href='./regrasJogo'>
                <div className='optionDesistirJogo'>Desistir</div>
            </a>
            <div className="boxGame">
                <div className="cartasRestantesPlayer">Cartas restantes: {listCardsPlayer.length}</div>
                <div className="cartasRestantesOponent">Cartas restantes: {listCardsOpponent.length}</div>
                <img src={CardBack} className="cardBackOponent" alt="" />
                <img src={CardBack} className="cardBackPlayer" alt="" />
                {card && <CartaJogo carta={card} borderColor={card.borderColor} attributeColor={card.attributeColor} key={v4()} />}
            </div>
        </>
    )
}

export default Jogo;