import React from "react";
import styled from "styled-components";

const InfoPainel = styled.section`
  grid-area: info;
  background: #fff2de;
  border: 1px solid #dcd1c0;
  width: 17.13vw;
  height: 18.3vw;
  padding: 2.12vw 1.61vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 0 1.24vw 2.27vw;

  @media (max-width: 900px) {
    width: 45.24vw;
    height: 50.85vw;
    margin: 1.95vw 0 0 0  ;
    align-items: center;
    padding: 0;
  }

  @media (max-width: 600px) {
    width: 80.3vw;
    height: 95.09vw;
    padding: 7.48vw;
    margin: 0;
    margin-top: 1.87vw;
  }
`;

const Titulo = styled.h3`
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.17vw;
  text-align: left;
  line-height: 1.39vw;
  color: #707070;
  margin: 0 0 0.88vw 0;

  @media (max-width: 900px) {
    font-size: 3.66vw;
    line-height: 4.27vw;
    height: 4.1vw;
    width: 38.22vw;
    margin: 3.45vw 0 0;
  }

  @media (max-width: 600px) {
    font-size: 7.48vw;
    line-height: 8.64vw;
    width: 81.31vw;
  }
`;

const Conceito = styled.p`
  font-family: var(--Open);
  font-weight: 300;
  font-size: 1.02vw;
  line-height: 1.39vw;
  color: #707070;
  text-align: left;
  margin: 0 0 2.16vw 0;

  @media (max-width: 900px) {
    width: 38.22vw;
    height: 29.15vw;
    font-size: 2.44vw;
    line-height: 3.29vw;
    margin: 2.59vw 0 0;
  }

  @media (max-width: 600px) {
    width: fit-content;
    height: fit-content;
    font-size: 5.14vw;
    line-height: 7.01vw;
    margin: 0;
    margin-top: 7.48vw;
  }
`;

const BotaoContainer = styled.div`
  width: fit-content;
  @media (max-width: 900px) {
    display: flex;
    width: 38.22vw;
    align-items: flex-start;
  }

  @media (max-width: 600px) {
    width: 81.31vw;
  }
`;

const Botao = styled.button`
  width: 8.2vw;
  height: 2.71vw;
  cursor: pointer;
  border: 1px solid #707070;
  font-family: Roboto;
  font-weight: bold;
  font-size: 0.95vw;
  line-height: 1.1vw;
  color: #707070;
  border-radius: 4px;
  margin: 0 0 0 0;
  background: transparent;
  transition: 500ms;

  :hover {
    background: #707070;
    color: #fff2de;
  }

  @media (max-width: 900px) {
    font-size: 1.95vw;
    width: 15.05vw;
    height: 5.07vw;
    margin: 2.91vw 0 0;
  }

  @media (max-width: 600px) {
    font-size: 4.21vw;
    height: 10.98vw;
    line-height: 4.91vw;
    margin: 5vw 0 0 0;
    width: 32.01vw;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <InfoPainel>
      <Titulo>Endomarketing</Titulo>
      <Conceito>
        Endomarketing está relacionado às ações de treinamento ou qualificação
        dos colaboradores da empresa visando um melhor serviço para o cliente.
        Marketing interno, devido ao nome, é usualmente confundido com
        Endomarketing mesmo sendo conceitos diferentes.
      </Conceito>
      <BotaoContainer>
        <Botao>Dispensar</Botao>
      </BotaoContainer>
    </InfoPainel>
  );
};
