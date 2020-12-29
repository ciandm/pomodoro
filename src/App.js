import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import colors from './theme/colors';
import PomodoroContainer from './containers/PomodoroContainer/PomodoroContainer';

function App() {
  return (
    <ThemeProvider theme={{
      colors,
      fontFamily: 'Kumbh Sans'
    }}>
      <GlobalStyle />
      <PomodoroContainer>
        hello
      </PomodoroContainer>
    </ThemeProvider>
  );
}

export default App;
