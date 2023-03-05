import styled from "styled-components";
import play_arrow from "../assets/seta_play.png";
import turn_arrow from "../assets/seta_virar.png";

export default function Card({ flashCard, revealQuestion, questionCards, code, revealAnswer, answerCards }) {
    return (
        <>
            <CardClosed reveal={questionCards.includes(code)}>
                <p>{flashCard}</p>
                <div>
                    <img src={play_arrow} alt="play arrow" onClick={() => revealQuestion(flashCard, code)} />
                </div>
            </CardClosed>
            <CardOpened reveal={questionCards.includes(code)}>
                <div>
                    <p>{flashCard}</p>
                </div>
                <div>
                    <figure>
                        <img src={turn_arrow} alt="turn arrow" onClick={() => revealAnswer(flashCard, code)} />
                    </figure>
                </div>
            </CardOpened>
            <CardTurned reveal={answerCards.includes(code)}>
                <p>{flashCard}</p>
                <div>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
            </CardTurned>
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
}

div {
    width: 20px;
    height: 23px;
}

img {
    width:100%;
    cursor: pointer;
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
    display: flex;
    align-items: flex-end;
}

figure{
    width: 30px;
    height: 20px;
}

img {
    width: 100%;
    cursor: pointer;
}
`

const CardTurned = styled.div`
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

div{
    display: flex;
    justify-content: space-between;
}

p{
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;

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