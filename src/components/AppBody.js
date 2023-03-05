import styled from "styled-components";
import Bottom from "./Bottom";
import Deck from "./Deck";
import Header from "./Header";
import cards from "./cards";
import { useState } from "react";

export default function AppBody() {

    const firstArray = ["Pergunta 1", "Pergunta 2", "Pergunta 3",
        "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"];

    const [flashCards, setFlashCards] = useState(firstArray);

    const [questionCards, setquestionCards] = useState([]);

    const [answerCards, setAnsweCards] = useState([]);

    const [iconCards, setIconCards] = useState([]);

    const [buttonNumber, setButtonNumber] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

    function revealQuestion(flashCard, code) {
        const questionsArray = cards.map(q => q.question);
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
        const newArray = [...questionCards, code];
        setquestionCards(newArray);
    }

    function revealAnswer(flashCard, code) {
        const answersArray = cards.map(a => a.answer);
        const newArray = [...flashCards];
        for (let i = 0; i < newArray.length; i++) {
            if (flashCard === newArray[i]) {
                newArray[i] = answersArray[i];
            }
        }
        setFlashCards(newArray);
        turnCards(code);
    }

    function turnCards(code) {
        const newArray = [...answerCards, code];
        setAnsweCards(newArray);
    }

    function answerNo(flashCard, code, number) {
        answer(flashCard);
        removeCode(code, questionCards);
        removeCode(code, answerCards);
        setIcon(code, number);
    }

    function answerPartial(flashCard, code, number) {
        answer(flashCard);
        removeCode(code, questionCards);
        removeCode(code, answerCards);
        setIcon(code, number);
    }

    function answerYes(flashCard, code, number) {
        answer(flashCard);
        removeCode(code, questionCards);
        removeCode(code, answerCards);
        setIcon(code, number);
    }

    function removeCode(code, codeList) {
        codeList = codeList.filter((listItem) => listItem !== code);
        setquestionCards(codeList);
        setAnsweCards(codeList);
    }

    function answer(flashCard) {
        const newArray = [...flashCards];
        for (let i = 0; i < firstArray.length; i++) {
            if (flashCard === newArray[i]) {
                newArray[i] = firstArray[i];
            }
        }
        setFlashCards(newArray);
    }

    function setIcon(code, number) {
        const newArray = [...iconCards, code];
        setIconCards(newArray);
        const secondArray = [...buttonNumber];
        secondArray[code] = number;
        setButtonNumber(secondArray);
        console.log(newArray);

    }

    return (
        <AppBackground>
            <Header />
            <Deck cards={cards}
                flashCards={flashCards}
                questionCards={questionCards}
                answerCards={answerCards}
                buttonNumber={buttonNumber}
                iconCards={iconCards}
                revealQuestion={revealQuestion}
                revealAnswer={revealAnswer}
                answerNo={answerNo}
                answerPartial={answerPartial}
                answerYes={answerYes} />
            <Bottom flashCards={flashCards}
                iconCards={iconCards} />
        </AppBackground>
    );
}

const AppBackground = styled.div`
width: 375px;
height: 667px;
margin: auto;
background-color: #FB6B6B;
`;

