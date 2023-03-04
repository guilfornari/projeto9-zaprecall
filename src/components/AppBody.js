import styled from "styled-components";
import Bottom from "./Bottom";
import Deck from "./Deck";
import Header from "./Header";
import cards from "./cards";
import { useState } from "react";

export default function AppBody() {

    const [flashCards, setFlashCards] = useState(["Pergunta 1",
        "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"]);

    function revealQuestion(flashCard) {
        const questionsArray = cards.map(q => q.question)

        for (let i = 0; i < flashCards.length; i++) {
            if (flashCard === flashCards[i]) {
                flashCards[i] = questionsArray[i];
            }
        }

        setFlashCards([...flashCards]);
    }

    return (
        <AppBackground>
            <Header />
            <Deck cards={cards} flashCards={flashCards} revealQuestion={revealQuestion} />
            <Bottom />
        </AppBackground>
    );
}

const AppBackground = styled.div`
width: 375px;
height: 667px;
margin: auto;
background-color: #FB6B6B;
`

