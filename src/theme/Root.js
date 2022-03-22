import React from 'react';

import ThemeProvider from '../styles/ThemeProvider'


export default function Root({ children }) {
    return children
    // return (
    //     <ThemeProvider>
    //         {children}
    //     </ThemeProvider>
    // );
}