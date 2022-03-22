import React from 'react';

// material
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';

// theme
import theme from "./mui-theme/";
import createEmotionCache from "./mui-theme/createEmotionCache";

// // styles
// import { styled } from './snippets'
// export { styled }

const cache = createEmotionCache();

function CustomProvider({ children }) {

    // return children

    return (
        <CacheProvider value={cache}>
            <ThemeProvider>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}

export default CustomProvider
