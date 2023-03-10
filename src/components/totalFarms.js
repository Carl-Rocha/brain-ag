import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const Farms = () => {
  const { producer } = useSelector((state) => state);
  const count = producer.length;
  return (
    <Typography component="p" variant="h4" align="center">
      Total de Fazendas: {count}
    </Typography>
  );
};

export default Farms;
