import styled from "styled-components";

export default function Bottom({ flashCards, iconCards }) {
    return (
        <BottomContainer data-test="footer">
            <p><span>{iconCards.length}</span>/<span>{flashCards.length}</span> CONCLUÍDOS</p>
        </BottomContainer>
    );
}

const BottomContainer = styled.div`
    width: 375px;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

p{
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
}
`