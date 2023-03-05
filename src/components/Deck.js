import styled from "styled-components";
import Card from "./Card";

export default function Deck({ flashCards, questionCards, revealQuestion,
    revealAnswer, answerCards, answerNo, buttonNumber, iconCards, answerPartial, answerYes }) {
    return (
        <CardContainer>
            {flashCards.map((flashCard, index) => (<Card
                flashCards={flashCards}
                questionCards={questionCards}
                answerCards={answerCards}
                flashCard={flashCard}
                buttonNumber={buttonNumber}
                iconCards={iconCards}
                key={index}
                revealQuestion={revealQuestion}
                revealAnswer={revealAnswer}
                code={index}
                answerNo={answerNo}
                answerPartial={answerPartial}
                answerYes={answerYes} />))}
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
`;
