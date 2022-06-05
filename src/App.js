import Header from '@components/Header'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header icon={LocalGroceryStoreIcon}>Faker shop</Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
