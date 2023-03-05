import styled from "styled-components";
import play_arrow from "../assets/seta_play.png";
import turn_arrow from "../assets/seta_virar.png";
import icon_correct from "../assets/icone_certo.png"
import icon_wrong from "../assets/icone_erro.png"
import icon_partial from "../assets/icone_quase.png"

export default function Card({ flashCard, revealQuestion, questionCards, code, revealAnswer,
    answerCards, answerNo, buttonNumber, iconCards, answerPartial, answerYes }) {

    const iconArray = [icon_wrong, icon_partial, icon_correct];
    const colorArray = ["#FF3030", "#FF922E", "#2FBE34"];

    return (
        <>
            <CardClosed reveal={questionCards.includes(code)}
                close={iconCards.includes(code)}
                lineColor={colorArray[buttonNumber[code]]}
                data-test="flashcard">
                <p data-test="flashcard-text">{flashCard}</p>
                <p data-test="flashcard-text">{flashCard}</p>
                <div>
                    <img src={play_arrow}
                        alt="play arrow"
                        onClick={() => revealQuestion(flashCard, code)}
                        data-test="play-btn" />
                    <img src={iconArray[buttonNumber[code]]}
                        alt="icon" />
                </div>
            </CardClosed>
            <CardOpened reveal={questionCards.includes(code)} turn={answerCards.includes(code)} data-test="flashcard">
                <p data-test="flashcard-text">{flashCard}</p>
                <div>
                    <figure>
                        <img src={turn_arrow}
                            alt="turn arrow"
                            onClick={() => revealAnswer(flashCard, code)}
                            data-test="turn-btn" />
                    </figure>
                </div>
                <div>
                    <button onClick={() => answerNo(flashCard, code, 0)} data-test="no-btn">Não lembrei</button>
                    <button onClick={() => answerPartial(flashCard, code, 1)} data-test="partial-btn">Quase não lembrei</button>
                    <button onClick={() => answerYes(flashCard, code, 2)} data-test="zap-btn">Zap!</button>
                </div>
            </CardOpened>
        </>
    );
}

const CardClosed = styled.div`
width: 300px;
height: 65px;
min-height: 65px;
background-color: #ffffff;
margin-bottom: 25px;
padding: 15px;
display: ${(props) => props.reveal ? "none" : "flex"};
justify-content: space-between;
align-items: center;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

p {
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #333333;
    display: ${(props) => props.close ? "none" : "flex"};
}

p:nth-child(2) {
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: ${(props) => props.lineColor};
    text-decoration: line-through;
    display: ${(props) => props.close ? "flex" : "none"};
}

div {
    width: 20px;
    height: 23px;
}

img {
    display: ${(props) => props.close ? "none" : "flex"};
    width:100%;
    cursor: pointer;
}

img:nth-child(2) {
    width: 100%;
    cursor: auto;
    display: ${(props) => props.close ? "flex" : "none"};
}
`

const CardOpened = styled.div`
width: 300px;
height: 131px;
min-height: 131px;
background-color: #FFFFD4;
margin-bottom: 25px;
padding: 15px;
display: ${(props) => props.reveal ? "flex" : "none"};
flex-direction: column;
justify-content: space-between;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

p {
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
}

div:nth-child(2){
    display: ${(props) => props.turn ? "none" : "flex"};
    justify-content: flex-end;
}

figure{
    width: 30px;
    height: 20px;
}

img {
    width: 100%;
    cursor: pointer;
}
div:nth-child(3){
    display: ${(props) => props.turn ? "flex" : "none"};
    justify-content: space-between;
}

button{
    width: 85px;
    height: 37px;
    border-style: none;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    background-color: #FF3030;
}

button:nth-child(2){
    background-color: #FF922E;
}

button:nth-child(3){
    background-color: #2FBE34;
}
`