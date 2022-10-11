import React from 'react';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Theme from './theme/theme';
import QRComponent from './components/QRMain';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContainer>
        <QRComponent />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: #d5e1ef;
`;
