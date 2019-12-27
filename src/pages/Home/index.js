import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

import { MovieIcon } from "../../icons";

import styles from "./style";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleClearClick = event => {
    setSearchText("");
  };

  const handleSearchClick = event => {
    history.push(`/results?movieName=${searchText}`);
  };

  const classes = styles();

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.moviesIcon} />
          </Grid>
        </Grid>

        <TextField
          value={searchText}
          placeholder="Buscar"
          onChange={handleSearchTextChange}
          margin="normal"
          className={classes.textFieldSearch}
        />
        <Grid className={classes.buttonsContainer}>
          <Button onClick={handleClearClick} variant="contained">
            Limpiar
          </Button>
          <Button
            onClick={handleSearchClick}
            variant="contained"
            color="primary"
            className={classes.searchButton}
            size="large"
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
