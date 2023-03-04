import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import AppBody from "./AppBody";

function App() {
  return (
    <Styling>
      <GlobalStyle />
      <AppBody />
    </Styling>
  );
}

export default App;

const Styling = styled.div`
background-color: #E5E5E5;
`