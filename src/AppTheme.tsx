import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
// Supports weights 100-900
import '@fontsource-variable/inter';

const theme = createTheme({
    palette: {
        primary: {
            main: '#111827',
        },
        background: {
            default: "#f5f5f5",
        },
    },
    typography: {
        fontFamily: "'Inter Variable', sans-serif"
    },
    shape:{
        borderRadius: 12,
    }
});

export default function AppTheme ({ children }: React.PropsWithChildren) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}