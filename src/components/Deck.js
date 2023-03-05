import styled from "styled-components";
import Card from "./Card";

export default function Deck({ flashCards, questionCards, revealQuestion, revealAnswer, answerCards }) {
    return (
        <CardContainer>
            {flashCards.map((flashCard, index) => (<Card
                flashCards={flashCards}
                questionCards={questionCards}
                answerCards={answerCards}
                flashCard={flashCard}
                key={index}
                revealQuestion={revealQuestion}
                revealAnswer={revealAnswer}
                code={index} />))}
        </CardContainer>
    );
}

const CardContainer = styled.div`
height: 444px;
margin-top: 51px;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;

&::-webkit-scrollbar{
    display: none;
    }
`
