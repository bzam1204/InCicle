import styled from "styled-components";

const Tipo = styled.p`
  height: 0.8vw;
  font-family: Roboto;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.43vw;
  line-height: 0.8vw;
  color: #000;
  margin: 0 0.29vw 0 0;

  .evento {
    background-color: #ee8686;
  }

  .comunicado {
    background: #3489b1;
  }

  .publicacao {
    background: #707070;
  }
`;

export default ({ post }) => {
  if (post.type === "event") return <Tipo className="evento">{post.type}</Tipo>;
  if (post.type === "release")
    return <Tipo className="comunicado"> {post.type} </Tipo>;
  if (post.type === "publication")
    return <Tipo className="publicacao"> W{post.type} </Tipo>;
};
