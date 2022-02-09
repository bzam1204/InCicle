import BtnCriar from "../BtnCriar";
import BtnTipo from "../BtnTipo/";
import styled from "styled-components";
const PainelHeader = styled.div`
  display: flex;
  width: 65.44vw;
  height: 3.51vw;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.43vw;
  @media (max-width: 900px) {
    width: 92.68vw;
    height: 5.85vw;
    margin: 0 0 1.95vw;
  }
  @media (max-width: 600px) {
    width: 96.26vw;
    height: 7.01vw;
  }
`;

const Titulo = styled.h2`
  color: #707070;
  line-height: 3.51vw;
  font-size: 2.56vw;
  font-weight: lighter;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 4.27vw;
    line-height: 5.85vw;
  }

  @media (max-width: 600px) {
    font-size: 5.14vw;
    line-height: 7.01vw;
    text-align: left;
  }
`;

const BotaoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15.08vw;
  height: 2.78vw;

  @media (max-width: 900px) {
    width: 31.2vw;
    height: 5.65vw;
  }

  @media (max-width: 600px) {
    width: 30.61vw;
    height: 5.84vw;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
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
