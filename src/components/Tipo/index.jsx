import styled from "styled-components";

export const Tipo = styled.p`
  background: ${(props) => props.bgColor};
  color: #ffffff;
  font-family: Roboto;
  font-weight: bold;
  font-size: 0.43vw;
  height: calc(0.8vw - 0.14vw);
  line-height: calc(0.8vw - 0.14vw);
  margin: 0 0.29vw 0 0;
  padding: 0.14vw 0.36vw;
  text-transform: uppercase;

  @media (max-width: 900px) {
    height: 1.71vw;
    font-size: 0.73vw;
    line-height: 1.71vw;
  }
  
  @media (max-width: 600px) {
    height: 3.27vw;
    padding: 0 0.93vw;
    font-size: 2.4vw;
    line-height: 3.27vw;
  }

  
`;

//It exports a function that receives a post and returns a component.
export default ({ post }) => {
  if (post.type === "event") {
    return <Tipo bgColor="#ee8686">Evento</Tipo>;
  } else if (post.type === "release") {
    return <Tipo bgColor="#3489b1">Comunicado</Tipo>;
  } else {
    return <Tipo bgColor="#707070">Publicação</Tipo>;
  }
};
