import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import 'codemirror/mode/jsx/jsx';

import theme from './theme';

// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:700,400');
  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin:400,500,600,700');

  html, body {
    padding: 0;
    min-height: 100%;
    font-family: 'Libre Franklin', sans-serif;
    color: ${props => props.theme.text};
  }

  code, .CodeMirror-line * {
   font-family: 'Roboto Mono';
  }
`;

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
