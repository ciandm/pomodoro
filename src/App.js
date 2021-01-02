import React, { useState, useReducer, useEffect } from 'react';
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
  const [settingsShown, setSettingsShown] = useState(false);
  const [selectedTimer, setSelectedTimer] = useState(localStorage.getItem('selectedTimer') || 'pomodoro');
  const [timerStatus, setTimerStatus] = useState({
    timer: '',
    progress: 'start',
    isClicked: false
  });

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

    if (action.type === 'font') {
      return {
        ...state,
        font: action.payload.label
      }
    }

    if (action.type === 'color') {
      return {
        ...state,
        color: action.payload.label
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

  function handleFontAndColorSelection(type, label) {
    if (type === 'font') {
      dispatch({
        type: 'font',
        payload: {
          label
        }
      })
    }

    if (type === 'color') {
      dispatch({
        type: 'color',
        payload: {
          label
        }
      })
    }
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

  useEffect(() => {
    setTimerStatus({
      timer: selectedTimer,
      progress: 'start',
      isClicked: false
    })
  }, [selectedTimer])

  function handleTimerSelect(timer) {
    setSelectedTimer(timer);
    localStorage.setItem('selectedTimer', timer);
    setTimerStatus({
      timer,
      progress: 'start',
      isClicked: false
    });
  }

  function handleTimerFinish() {
    setTimerStatus(prevStatus => ({
      ...prevStatus,
      progress: 'finished'
    }))
  }

  function handleTimerActivation(timer) {
    let progress;
    switch (timerStatus.progress) {
      case 'start':
        progress = 'playing'
        break;
      case 'playing':
        progress = 'paused'
        break;
      case 'paused':
        progress = 'playing'
        break;
      case 'finished':
        progress = 'playing'
        break;
      default:
        throw new Error()
    }
    setTimerStatus({
      timer,
      progress,
      isClicked: true
    });
  }

  return (
    <ThemeProvider theme={{
      colors,
      colorChoices,
      fontChoices,
      userFontChoice: settings.font,
      userColorChoice: settings.color
    }}>
      <GlobalStyle />
      <PomodoroContainer>
        <TimerToggle
          selectedTimer={selectedTimer}
          handleTimerSelect={handleTimerSelect}
        />
        <Timer
          settings={settings}
          selectedTimer={selectedTimer}
          timerStatus={timerStatus}
          handleTimerActivation={handleTimerActivation}
          handleTimerFinish={handleTimerFinish}
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
        handleFontAndColorSelection={handleFontAndColorSelection}
        handleInputChange={handleInputChange}
        settings={settings}
      />
    </ThemeProvider>
  );
}

export default App;
