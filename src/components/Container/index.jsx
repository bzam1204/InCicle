import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfoPainel from "../InfoPainel";
import PostsPainel from "../PostsPainel";
import QuadrosPainel from "../QuadrosPainel";

const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 4.02vw);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Painel = styled.section`
  display: grid;
  grid-template-areas:
    "posts info"
    "posts quadros";
`;

export default () => {
  

  return (
    <Container>
      <Painel>
        <PostsPainel />
        <QuadrosPainel />
        <InfoPainel />
      </Painel>
    </Container>
  );
};
