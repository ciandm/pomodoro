import React, { useState, useReducer } from 'react';
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

  const retrievedSettings = JSON.parse(localStorage.getItem('usersSettings'));
  const initialState = {
    pomodoro: 15,
    shortBreak: 1,
    longBreak: 1,
    font: 'Kumbh Sans',
    color: 'froly'
  }

  const [userColorChoice, setUserColorChoice] = useState('froly');
  const [userFontChoice, setUserFontChoice] = useState('Kumbh Sans');
  const [settingsShown, setSettingsShown] = useState(true);

  function reducer(state, action) {
    if (action.type === 'increment') {
      return {
        ...state,
        [action.payload.label]: +state[action.payload.label] + 1
      }
    }

    if (action.type === 'decrement') {
      return {
        ...state,
        [action.payload.label]: +state[action.payload.label] - 1
      }
    }

    if (action.type === 'input') {
      return {
        ...state,
        [action.payload.label]: action.payload.value
      }
    }

    if (action.type === 'cancel') {
      if (retrievedSettings) {
        return {
          ...retrievedSettings
        }
      } else {
        return {
          ...initialState
        }
      }
    }

    if (action.type === 'apply') {
      localStorage.setItem('usersSettings', JSON.stringify(state));
      return {
        ...state
      }
    }
  }

  const [settings, dispatch] = useReducer(reducer, retrievedSettings || initialState);

  function handleSettingsShown(bool) {
    setSettingsShown(bool);
  }

  function handleInputIncrementAndDecrement(type, label) {
    if (type === 'increment') {
      if (settings[label] === 25) return;
      dispatch({
        type,
        payload: {
          label
        }
      })
    } else if (type === 'decrement') {
      if (settings[label] === 1) return;
      dispatch({
        type,
        payload: {
          label
        }
      })
    }
  }

  function handleInputChange(value, label) {
    dispatch({
      type: 'input',
      payload: {
        label,
        value
      }
    })
  }

  function handleSettingsClose(type) {
    if (type === 'cancel') {
      dispatch({
        type: 'cancel'
      })
    }
    setSettingsShown(false);
  }

  function handleSettingsSubmit() {
    dispatch({
      type: 'apply'
    })
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
        <Timer
          pomodoro={settings.pomodoro}
          shortBreak={settings.shortBreak}
        />
        <SettingsButton
          handleSettingsShown={handleSettingsShown}
        />
      </PomodoroContainer>
      <SettingsContainer
        settingsShown={settingsShown}
        handleSettingsShown={handleSettingsShown}
        handleSettingsClose={handleSettingsClose}
        handleSettingsSubmit={handleSettingsSubmit}
        handleInputIncrementAndDecrement={handleInputIncrementAndDecrement}
        handleInputChange={handleInputChange}
        settings={settings}
      />
    </ThemeProvider>
  );
}

export default App;
