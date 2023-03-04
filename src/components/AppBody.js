import styled from "styled-components";
import Bottom from "./Bottom";
import Deck from "./Deck";
import Header from "./Header";

export default function AppBody() {
    return (
        <AppBackground>
            <Header />
            <Deck />
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

