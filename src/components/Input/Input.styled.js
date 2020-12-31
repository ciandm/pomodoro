import styled from 'styled-components';
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
`

export const Input = styled.input`
  ${BodyPrimary};
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors['mirage']};
  outline: none;
  padding: 16px;
  width: 100%;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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