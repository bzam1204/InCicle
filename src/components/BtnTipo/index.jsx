import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";

const BtnTipo = withStyles({
  root: {
    background: "transparent",
    borderRadius: 3,
    border: 0,
    color: "white",
    width: 90,
    height: 38,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})(Select);

export default () => {
  const [tipo, setTipo] = React.useState("");

  const handleChange = (event) => {
    setTipo(event.target.value);
  };
  return (
    <BtnTipo name={'lçkj'}>
      <option>tipo</option>
    </BtnTipo>
  );
};
