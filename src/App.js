import React, { useState } from 'react';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import colors, { colorChoices } from './theme/colors';
import { fontChoices } from './theme/typography'
import PomodoroContainer from './containers/PomodoroContainer/PomodoroContainer';
import TimerToggle from './components/TimerToggle/TimerToggle';
import Timer from './components/Timer/Timer';
import SettingsButton from './components/SettingsButton/SettingsButton';
import SettingsContainer from './containers/SettingsContainer/SettingsContainer';

function App() {

  const [userColorChoice, setUserColorChoice] = useState('froly');
  const [userFontChoice, setUserFontChoice] = useState('Kumbh Sans');
  const [settingsShown, setSettingsShown] = useState(false);

  function handleSettingsShown(e) {
    if (e.target.getAttribute("data-modal-close")) {
      console.log(e);
      setSettingsShown(false);
    } else {
      setSettingsShown(true);
    }
  }

  return (
    <ThemeProvider theme={{
      colors,
      userFontChoice,
      userColorChoice,
      colorChoices,
      fontChoices
    }}>
      <GlobalStyle />
      <PomodoroContainer>
        <TimerToggle />
        <Timer />
        <SettingsButton
          handleSettingsShown={handleSettingsShown}
        />
      </PomodoroContainer>
      <SettingsContainer
        settingsShown={settingsShown}
        handleSettingsShown={handleSettingsShown}
      />
    </ThemeProvider>
  );
}

export default App;
