import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './Input.styled';
import iconArrowUp from '../../assets/images/icon-arrow-up.svg'
import iconArrowDown from '../../assets/images/icon-arrow-down.svg'

function Input({
  id,
  label,
  value,
  handleInputIncrementAndDecrement,
}) {
  return (
    <Styled.InputGroup>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputContainer>
        <Styled.Input
          pattern="[0-9]"
          value={value}
          readOnly
        />
        <Styled.ButtonGroup>
          <Styled.Button
            imageUrl={iconArrowUp}
            onClick={() => handleInputIncrementAndDecrement('increment', id)}
          />
          <Styled.Button
            imageUrl={iconArrowDown}
            onClick={() => handleInputIncrementAndDecrement('decrement', id)}
          />
        </Styled.ButtonGroup>
      </Styled.InputContainer>
    </Styled.InputGroup>
  )
}

export default Input

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputIncrementAndDecrement: PropTypes.func,
}