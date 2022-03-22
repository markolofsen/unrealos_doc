import React from 'react';

// material
import { ThemeProvider } from "@mui/material/styles";

// theme
import theme from "./mui-theme/";

// styles
import { styled } from './snippets'
export { styled }


function CustomProvider(props) {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default CustomProvider
