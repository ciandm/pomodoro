import React from 'react'
import PropTypes from 'prop-types';
import {
  Button
} from './SettingButtons.styled';
import settingsIcon from '../../assets/images/icon-settings.svg';


function SettingsButton({
  handleSettingsShown
}) {
  return (
    <Button onClick={() => handleSettingsShown(true)}>
      <img src={settingsIcon} alt="Setting icon" />
    </Button>
  )
}

export default SettingsButton


SettingsButton.propTypes = {
  handleSettingsShown: PropTypes.func.isRequired,
}