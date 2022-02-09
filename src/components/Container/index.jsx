import styled from "styled-components";
import InfoPainel from "../InfoPainel";
import PostsPainel from "../PostsPainel";
import QuadrosPainel from "../QuadrosPainel";

const Container = styled.section`
  width: 100vw;
  margin-top: 2.49vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;

  @media (max-width: 900px) {
    margin-top: 3.9vw;
  }
`;

const Painel = styled.section`
  display: grid;
  grid-template-areas:
    "posts info"
    "posts quadros";

  @media (max-width: 900px) {
    grid-template-areas:
      "posts posts"
      "info quadros";
    width: 92.8vw;
  }

  @media (max-width: 600px) {
    grid-template-areas:
      "posts"
      "info"
      "quadros";

    width: 96.26vw;
    justify-items: center;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
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
