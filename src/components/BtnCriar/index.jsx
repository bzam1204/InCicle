import * as React from "react";
import styled from "styled-components";
import addIcon from "./add.svg";

const Botao = styled.button`
  background: #3489b1;
  font-size: 1.02vw;
  width: 7.76vw;
  height: 2.78vw;
  font-weight: 700;
  font-family: var(--Open);
  color: #fff;
  transition: 500ms;
  border-radius: 4px;
  border: none;
  :hover {
    background-color: #156d97;
  }
  @media (max-width: 900px) {
    width: 15.6vw;
    height: 5.65vw;
    font-size: 2.2vw;
  }

  @media (max-width: 600px) {
    width: 14.49vw;
    font-size: 2.56vw;
    height: 5.84vw;
  }
`;

const Icon = styled.img`
  width: 0.59vw;
  @media (max-width: 900px) {
    width: 1.22vw;
    padding-left: 3.9vw;
  }
  @media (max-width: 600px) {
    width: 1.87vw;
    padding-left: 0.59vw;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Botao>
      Criar
      <Icon src={addIcon} />
    </Botao>
  );
};
