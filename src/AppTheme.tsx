import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
// Supports weights 100-900
import "@fontsource-variable/inter";
import { Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111827",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Inter Variable', sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                border: `1px solid ${theme.palette.primary.main}`,
                boxShadow: `inset -0.75px -0.75px 0.75px #000, inset 0.75px 0.75px 0.75px rgba(255, 255, 255, 0.4)`,
                backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                backgroundColor: theme.palette.primary.light,
                "&:hover": {
                  boxShadow: `inset -0.75px -1px 0.75px #000, inset 0.75px 0 0.75px rgba(255, 255, 255, 0.4)`,
                  backgroundImage: "none",
                },
                "&:active": {
                  boxShadow: "none",
                },
              },
            },
          ],
        }),
      },
    },
  },
});

export default function AppTheme({ children }: React.PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
