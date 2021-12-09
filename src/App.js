import { PrimarySearchAppBar } from './components';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar />
    </ThemeProvider>
  );
}

export default App;
