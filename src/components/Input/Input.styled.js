import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';
import {
  BodyPrimary,
  BodySecondary
} from '../../theme/typography'

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 20px;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    align-items: center;
    flex-direction: row;
    
    & + & {
      margin-left: 0;
      margin-top: 8px;
    }
  }
`

export const Label = styled.label`
  ${BodySecondary};
  margin-bottom: 8px;
  opacity: .4;
  text-transform: lowercase;
`

export const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['white_lilac']};
  border-radius: 10px;
  display: flex;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.sm}) {
    height: 100%;
    max-width: 140px;
    margin-left: auto;
    width: 100%;
  }
`

export const Input = styled.input`
  ${BodyPrimary};
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors['mirage']};
  outline: none;
  padding: 16px;
  width: 100%;

  @media screen and (max-width: ${breakpoints.sm}) {
    /* padding: 48px 16px; */
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  background-color: transparent;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
  flex: 1;
  outline: none;
  opacity: .25;
  padding: 0 16px;

  &:hover {
    opacity: 1;
  }
`