import { NavBar } from './components';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
