import styled from 'styled-components';

export const PomodoroContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;

  & > h2 {
    color: ${({ theme }) => theme.colors['white_lilac']};
    font-size: 32px;
    line-height: 1;
    margin-bottom: 48px;
  }
`