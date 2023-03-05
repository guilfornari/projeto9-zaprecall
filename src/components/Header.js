import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <TitleContainer>
            <ImgContainer>
                <img src={logo} alt="ZapRecall logo" />
            </ImgContainer>
            <h1>ZapRecall</h1>
        </TitleContainer>
    );
}

const TitleContainer = styled.div`
padding: 42px 70px 0px;
display: flex;
justify-content: space-between;
align-items: center;

h1{
font-family: 'Righteous', cursive;
font-size: 36px;
color: #FFFFFF

}
`;

const ImgContainer = styled.div`
width: 52px;
height: 60px;

img{
    width:100%;
}
`;
