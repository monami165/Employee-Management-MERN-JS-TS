import React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";

const Nav = () => {
  return (
    <div>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Employee Management Portal
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/"
              padding="0px 10px"
              sx={{ my: 1, mx: 1.5 }}
            >
              Employee List
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/form"
              padding="0px 10px"
              sx={{ my: 1, mx: 1.5 }}
            >
              Add Employee
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <br />
    </div>
  );
};

export default Nav;
