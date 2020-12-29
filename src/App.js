import React, { useState } from 'react';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import colors from './theme/colors';
import PomodoroContainer from './containers/PomodoroContainer/PomodoroContainer';
import TimerToggle from './components/TimerToggle/TimerToggle';
import Timer from './components/Timer/Timer';

function App() {

  const [colorChoice, setColorChoice] = useState('froly');
  const [fontChoice, setFontChoice] = useState('Kumbh Sans');

  return (
    <ThemeProvider theme={{
      colors,
      fontFamily: fontChoice,
      colorChoice
    }}>
      <GlobalStyle />
      <PomodoroContainer>
        <TimerToggle />
        <Timer />
      </PomodoroContainer>
    </ThemeProvider>
  );
}

export default App;
