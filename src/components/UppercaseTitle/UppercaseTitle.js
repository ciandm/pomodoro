import React from 'react'
import styled, { css } from 'styled-components';
import {
  H4
} from '../../theme/typography';
import PropTypes from 'prop-types';

const Title = styled.h4`
  ${H4};

  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}
`

const UppercaseTitle = ({
  title,
  marginBottom
}) => {
  return (
    <Title marginBottom={marginBottom}>
      {title}
    </Title>
  )
}

UppercaseTitle.propTypes = {
  title: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
}

export default UppercaseTitle
