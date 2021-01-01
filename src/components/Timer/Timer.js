import React, { useState, useEffect } from 'react'
import * as Styled from './Timer.styled';
import useInterval from '../../hooks/useInterval';

function Timer({
  settings,
  selectedTimer,
  timerActive,
  handleTimerActivation
}) {
  const [timeDisplayed, setTimeDisplayed] = useState({
    minutes: 0,
    seconds: 0,
    finished: true
  });
  const [delay, setDelay] = useState('100');

  useEffect(() => {
    const totalSeconds = settings[selectedTimer] * 60;
    const minutes = totalSeconds / 60;
    let seconds = totalSeconds % 60;
    setTimeDisplayed({
      minutes: minutes,
      seconds: seconds,
      finished: false
    });
  }, [selectedTimer, settings]);

  useInterval(() => {
    const { minutes, seconds } = timeDisplayed;
    if (seconds > 0) {
      setTimeDisplayed(prevState => ({
        ...prevState,
        seconds: seconds - 1
      }))
    }

    if (seconds === 0) {
      if (minutes === 0) {
        setDelay(null);
        setTimeDisplayed(prevState => ({
          ...prevState,
          finished: true
        }))
      } else {
        setTimeDisplayed(prevState => ({
          ...prevState,
          minutes: minutes - 1,
          seconds: 59
        }))
      }
    }
  }, timerActive ? delay : null);

  return (
    <Styled.TimerContainer>
      <Styled.TimerScreen>
        <Styled.TimerProgress />
        <Styled.TimerRemaining>{`${timeDisplayed.minutes > 9 ? timeDisplayed.minutes : `0${timeDisplayed.minutes}`}:${timeDisplayed.seconds > 10 ? timeDisplayed.seconds : `0${timeDisplayed.seconds}`}`}</Styled.TimerRemaining>
        <Styled.TimerControl onClick={() => handleTimerActivation()}
        >{timeDisplayed.finished ? 'Restart' : timerActive ? 'Pause' : 'Start'}</Styled.TimerControl>
      </Styled.TimerScreen>
    </Styled.TimerContainer>
  )
}

export default Timer
