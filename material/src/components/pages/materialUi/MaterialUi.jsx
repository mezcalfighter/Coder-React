import React from 'react'
//import Button from '@mui/material/Button'
import {Box, Button, Grid, TextField, Typography} from "@mui/material";


const MaterialUi = () => {
  return (
    // <div>
    //   <Typography color={"primary"} variant="h2">
    //     Estoy aprendiendo Material UI
    //   </Typography>
    //   <Typography color={"secondary"} variant="h2">
    //     Estoy aprendiendo Material UI
    //   </Typography>
    //   <TextField label="Nombre" variant="outlined" />
    //   <Button variant="contained">Saludar</Button>
    // </div>

    // <div style={{padding:"20px"}}>
    <Box component={"div"}
      sx={{
        padding: { xs: "10px", md:"20px"},
        backgroundColor: { xs: "lavender", md: "burlywood" },
      }}
    >
      <Grid
        container
        style={{ display: "flex", justifyContent: "center" }}
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <TextField label="email" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="password" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant={"contained"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Ingresar
          </Button>
        </Grid>
      </Grid>
    </Box>
    // </div>
  );
}

export default MaterialUi
