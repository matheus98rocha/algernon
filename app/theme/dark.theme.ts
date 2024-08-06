"use client";

import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#d6b13b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#b39230",
    },
    background: {
      paper: "#faf0f0",
      default: "#F4E772",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#d6b13b",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d6b13b",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
        },
      },
    },
  },
});

export default darkTheme;
