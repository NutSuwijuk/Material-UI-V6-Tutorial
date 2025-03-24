import { ThemeProvider } from "@emotion/react";
import { ThemeProviderProps, createTheme } from "@mui/material/styles";
import React, { Children } from "react";

const theme = createTheme({
    palette: {
        background: {
            default: "#f5f5f5",
        },
    },
});

export default function AppTheme ({ children }: React.PropsWithChildren) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}