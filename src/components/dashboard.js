import React from "react";
import States from "./states";
import { Grid, Container, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Farms from "./totalFarms";
import SoilUseChart from "./landUsage";
import Farming from "./farming";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md">
      <Grid item xs={12}>
        <Farms />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: 394,
              height: 394,
            }}
          >
            <States />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <SoilUseChart />
        </Grid>
        <Grid item xs={12} justifyContent="center" display="flex">
          <Grid item xs={6}>
            <Farming />
          </Grid>
        </Grid>
      </Grid>

      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => navigate("/producers")}
      >
        Ver Produtores
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => navigate("/")}
      >
        Adicionar Produtor
      </Button>
    </Container>
  );
};

export default Dashboard;
