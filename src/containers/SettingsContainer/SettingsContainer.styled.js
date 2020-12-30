import styled from 'styled-components';
import {
  H2
} from '../../theme/typography';
import iconClose from '../../assets/images/icon-close.svg';


export const SettingsContainer = styled.div`
  align-items: center;
  background-color: rgba(10, 12, 28, .5);
  bottom: 0;
  display: ${({ settingsShown }) => settingsShown ? 'flex' : 'none'};
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 500;
`

export const SettingsModal = styled.div`
  background-color: ${({ theme }) => theme.colors['white']};
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
`

export const SettingsHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors['white_lilac']};
  display: flex;
  justify-content: space-between;
  padding: 24px 36px;
`

export const SettingsTitle = styled.h2`
  ${H2}
  color: ${({ theme }) => theme.colors['mirage']};
`

export const SettingsClose = styled.button`
  background-color: transparent;
  background-image: url(${iconClose});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
  height: 36px;
  outline: none;
  opacity: .5;
  width: 36px;

  &:hover {
    opacity: 1;
  }

  & img {
    user-select: none;
  }
`

export const SettingsRows = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 36px 24px 36px;
`

export const SettingsRow = styled.div`
  align-items: ${({ directionType }) => directionType === 'row' ? 'center' : 'flex-start'};
  display: flex;
  flex-direction: ${({ directionType }) => directionType === 'column' ? 'column' : 'row'};
  justify-content: ${({ directionType }) => directionType === 'row' ? 'space-between' : 'initial'};
  padding: 24px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors['white_lilac']};
  }
`

export const SettingsGroup = styled.div`
  display: flex;
  z-index: 50;
`