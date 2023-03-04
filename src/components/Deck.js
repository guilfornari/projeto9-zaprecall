import styled from "styled-components";
import Card from "./Card";

export default function Deck() {
    return (
        <CardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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
