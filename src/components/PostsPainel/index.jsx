import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { buscaPosts } from "../../api/data";
import PainelHeader from "../PainelHeader/";
import Post from "../Post";

const PostsPainel = styled.section`
  grid-area: posts;
  width: 65.44vw;
  max-height: 79.27vh;
`;

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    buscaPosts().then((data) => {
      setPosts(data);
    });
  }, []);
  return (
    <PostsPainel>
      <PainelHeader />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </PostsPainel>
  );
};
