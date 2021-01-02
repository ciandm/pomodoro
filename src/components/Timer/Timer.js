import React, { useState, useEffect } from 'react'
import * as Styled from './Timer.styled';
import useInterval from '../../hooks/useInterval';

function Timer({
  settings,
  selectedTimer,
  timerStatus,
  handleTimerActivation,
  handleTimerFinish
}) {
  const [timeDisplayed, setTimeDisplayed] = useState({
    minutes: 0,
    seconds: 0,
    animationDuration: ''
  });
  const [savedTimeDisplayed, setSavedTimeDisplayed] = useState({
    minutes: 0,
    seconds: 0,
  })
  const [delay, setDelay] = useState('100');

  useEffect(() => {
    const totalSeconds = settings[selectedTimer] * 60;
    const minutes = totalSeconds / 60;
    let seconds = totalSeconds % 60;
    setTimeDisplayed({
      minutes: minutes,
      seconds: seconds,
      animationDuration: `${totalSeconds}s`
    });
    setSavedTimeDisplayed({
      minutes,
      seconds
    })
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
        handleTimerFinish();
      } else {
        setTimeDisplayed(prevState => ({
          ...prevState,
          minutes: minutes - 1,
          seconds: 59
        }))
      }
    }
  }, timerStatus.progress === 'playing' ? delay : null);

  function timerClickHandler(timer) {
    // get the current timer being clicked
    handleTimerActivation(timer);
    if (timerStatus.progress === 'finished') {
      setTimeDisplayed(prevState => ({
        ...prevState,
        minutes: savedTimeDisplayed.minutes,
        seconds: savedTimeDisplayed.seconds
      }))
      setDelay('100');
    }
  }

  return (
    <Styled.TimerContainer>
      <Styled.TimerScreen>
        <Styled.TimerProgress
          animationTime={timeDisplayed.animationDuration}
          timerStatus={timerStatus}
          timerFinished={timeDisplayed.finished}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 340 340"
            className={`${timerStatus.isClicked === true && timerStatus.progress !== 'finished' ? 'countdownAnimation' : null}
                        ${timerStatus.progress === 'playing' ? 'isAnimating' : 'isPaused'}
                        `
            }
          >
            <circle className="circle--behind" cx="50%" cy="50%" r="160" />
            <circle className="circle" cx="50%" cy="50%" r="160" />
          </svg>
        </Styled.TimerProgress>
        <Styled.TimerRemaining>
          {`${timeDisplayed.minutes >= 10 ? timeDisplayed.minutes : `0${timeDisplayed.minutes}`}:${timeDisplayed.seconds >= 10 ? timeDisplayed.seconds : `0${timeDisplayed.seconds}`}`}
        </Styled.TimerRemaining>
        <Styled.TimerControl onClick={() => timerClickHandler(selectedTimer)}
        >{timerStatus.progress === 'finished' ? 'Restart' : timerStatus.progress === 'playing' ? 'Pause' : 'Start'}</Styled.TimerControl>
      </Styled.TimerScreen>
    </Styled.TimerContainer>
  )
}

export default Timer
