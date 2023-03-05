import styled from "styled-components";
import Bottom from "./Bottom";
import Deck from "./Deck";
import Header from "./Header";
import cards from "./cards";
import { useState } from "react";

export default function AppBody() {

    const [flashCards, setFlashCards] = useState(["Pergunta 1", "Pergunta 2",
        "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"]);

    const [questionCards, setquestionCards] = useState([]);

    const [answerCards, setAnsweCards] = useState([]);

    function revealQuestion(flashCard, code) {
        const questionsArray = cards.map(q => q.question)
        const newArray = [...flashCards];
        for (let i = 0; i < newArray.length; i++) {
            if (flashCard === newArray[i]) {
                newArray[i] = questionsArray[i];
            }
        }
        setFlashCards(newArray);
        openCards(code);
    }

    function openCards(code) {
        const newArray = [...questionCards, code]
        setquestionCards(newArray);
    }

    function revealAnswer(flashCard, code) {
        const answersArray = cards.map(a => a.answer)
        const newArray = [...flashCards]
        for (let i = 0; i < newArray.length; i++) {
            if (flashCard === newArray[i]) {
                newArray[i] = answersArray[i];
            }
        }
        setFlashCards(newArray);
        turnCards(code);
    }

    function turnCards(code) {
        const newArray = [...answerCards, code]
        setAnsweCards(newArray);
    }



    return (
        <AppBackground>
            <Header />
            <Deck cards={cards}
                flashCards={flashCards}
                questionCards={questionCards}
                answerCards={answerCards}
                revealQuestion={revealQuestion}
                revealAnswer={revealAnswer} />
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

