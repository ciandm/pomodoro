import React from 'react'
import * as Styled from './Timer.styled';
import Circle from '../Circle/Circle';

function Timer({
  selectedTimer,
  timerStatus,
  circleSections,
  timeDisplayed,
  timerClickHandler
}) {

  return (
    <Styled.TimerContainer>
      <Styled.TimerScreen>
        <Styled.TimerProgress
          timerStatus={timerStatus}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 340 340"
          >
            <circle className="circle--behind" cx="50%" cy="50%" r="160" />
            {circleSections.map(circle => {
              return (
                <Circle
                  key={circle.id}
                  rotation={circle.rotateDeg}
                  dashOffset={circle.dashOffset}
                />
              )
            })}
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
