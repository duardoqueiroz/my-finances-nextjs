"use client";

import {
  createTheme,
  Grid,
  Paper,
  Theme,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const SignIn = () => {
  const theme = useTheme();

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundColor: theme.palette.primary.main,
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      ></Grid>
    </Grid>
  );
};

export default SignIn;
