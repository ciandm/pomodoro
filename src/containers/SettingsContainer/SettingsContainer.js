import React, { useState } from 'react'
import PropTypes from 'prop-types';
import * as Styled from './SettingsContainer.styled';
import { ThemeConsumer } from 'styled-components'
import UppercaseTitle from '../../components/UppercaseTitle/UppercaseTitle';
import CircularButton from '../../components/CircularButton/CircularButton';
import Input from '../../components/Input/Input';
import {
  FaCheck
} from 'react-icons/fa'

function SettingsContainer({
  settingsShown,
  handleSettingsClose,
  handleInputIncrementAndDecrement,
  handleInputChange,
  handleFontAndColorSelection,
  handleSettingsSubmit,
  settings
}) {

  const [settingsSubmitted, setSettingsSubmitted] = useState(false);

  function handleSubmitButtonClick() {
    if (settingsSubmitted) return;
    handleSettingsSubmit();
    setSettingsSubmitted(true);
    setTimeout(() => {
      setSettingsSubmitted(false);
    }, 1000)
  }

  return (
    <ThemeConsumer>
      {
        theme => {
          return (
            <Styled.SettingsContainer
              settingsShown={settingsShown}
            >
              <Styled.SettingsModal>
                <Styled.SettingsHeader>
                  <Styled.SettingsTitle>Settings</Styled.SettingsTitle>
                  <Styled.SettingsClose
                    onClick={() => handleSettingsClose('cancel')}
                  />
                </Styled.SettingsHeader>
                <Styled.SettingsRows>
                  <Styled.SettingsRow directionType="column">
                    <UppercaseTitle
                      title="Time (minutes)"
                      marginBottom="20px"
                    />
                    <Styled.SettingsGroup >
                      <Input
                        id="pomodoro"
                        type="number"
                        label="Pomodoro"
                        value={settings.pomodoro}
                        handleInputIncrementAndDecrement={handleInputIncrementAndDecrement}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        id="shortBreak"
                        label="Short break"
                        value={settings.shortBreak}
                        handleInputIncrementAndDecrement={handleInputIncrementAndDecrement}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        id="longBreak"
                        label="Long break"
                        value={settings.longBreak}
                        handleInputIncrementAndDecrement={handleInputIncrementAndDecrement}
                        handleInputChange={handleInputChange}
                      />
                    </Styled.SettingsGroup>
                  </Styled.SettingsRow>
                  <Styled.SettingsRow>
                    <UppercaseTitle title="Font" />
                    <Styled.SettingsGroup>
                      {theme.fontChoices.map(choice => {
                        return (
                          <CircularButton
                            key={choice.id}
                            label={choice.fontName}
                            type="font"
                            active={theme.userFontChoice === choice.fontName ? true : false}
                            fontButton
                            fontFamily={choice.fontName}
                            handleFontAndColorSelection={handleFontAndColorSelection}
                          >
                            Aa
                          </CircularButton>
                        )
                      })}
                    </Styled.SettingsGroup>
                  </Styled.SettingsRow>
                  <Styled.SettingsRow>
                    <UppercaseTitle title="Color" />
                    <Styled.SettingsGroup>
                      {theme.colorChoices.map(choice => {
                        return (
                          <CircularButton
                            key={choice.id}
                            label={choice.colorName}
                            type="color"
                            active={theme.userColorChoice === choice.colorName ? true : false}
                            backgroundColor={theme.colors[choice.colorName]}
                            handleFontAndColorSelection={handleFontAndColorSelection}
                            colorButton
                          >
                            <FaCheck />
                          </CircularButton>
                        )
                      })}
                    </Styled.SettingsGroup>
                  </Styled.SettingsRow>
                </Styled.SettingsRows>
              </Styled.SettingsModal>
              <Styled.ApplyButton
                onClick={() => handleSubmitButtonClick()}
              >{settingsSubmitted ? 'Applied' : 'Apply'}</Styled.ApplyButton>
            </Styled.SettingsContainer>
          )
        }
      }
    </ThemeConsumer>
  )
}

Styled.SettingsRow.defaultProps = {
  directionType: 'row'
}

SettingsContainer.propTypes = {
  settingsShown: PropTypes.bool.isRequired,
  handleSettingsShown: PropTypes.func.isRequired,
}

export default SettingsContainer
