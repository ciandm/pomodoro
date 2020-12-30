import React from 'react'
import styled from 'styled-components';
import {
  H4
} from '../../theme/typography';
import PropTypes from 'prop-types';

const Title = styled.h4`
  ${H4}
`

const UppercaseTitle = ({
  title
}) => {
  return (
    <Title>
      {title}
    </Title>
  )
}

UppercaseTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default UppercaseTitle
