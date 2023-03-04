import styled from "styled-components";
import seta_play from "../assets/seta_play.png";

export default function Card() {
    return (
        <CardBox>
            <p>Pergunta 1</p>
            <img src={seta_play} alt="play arrow" />
        </CardBox>
    );
}

const CardBox = styled.div`
width: 300px;
height: 65px;
min-height: 65px;
background-color: #ffffff;
margin-bottom: 25px;
padding: 15px;
display: flex;
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
`