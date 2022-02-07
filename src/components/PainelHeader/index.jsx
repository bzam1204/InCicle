import BtnCriar from "../BtnCriar";
import BtnTipo from "../BtnTipo/";
import styled from "styled-components";
const PainelHeader = styled.div`
  display: flex;
  width: 65.44vw;
  height: 3.51vw;
  justify-content: space-between;
  margin-bottom: 0.43vw;
`;

const Titulo = styled.h2`
  color: #707070;
  line-height: 3.51vw;
  font-size: 2.56vw;
  font-weight: lighter;
  margin: 0;
`;

const BotaoContainer = styled.div`
  display: flex;
  width: 14.49vw;
`;

export default () => {
  return (
    <PainelHeader>
      <Titulo>Endomarketing</Titulo>
      <BotaoContainer>
        <BtnTipo />
        <BtnCriar />
      </BotaoContainer>
    </PainelHeader>
  );
};
