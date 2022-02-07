import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const BtnCriar = styled.button``;

export default () => {
  return (
    <Button
      sx={{
        backgroundColor: "#3489B1",
        fontSize: "1.02vw",
        fontWeight: "700",
        fontFamily: "var(--Open)",
      }}
      variant="outlined"
      endIcon={<AddIcon />}
    >
      <p sx={{ color: "#ffffff", padding: 0, margin: 0 }}>Criar</p>
    </Button>
  );
};
