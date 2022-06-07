import Header from '@components/Header'
import ProduceCard from '@components/ProduceCard'
import ProducesList from '@components/ProducesList'
import ProduceDetail from '@components/ProduceDetail'

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyle from '@styled/globalStyle';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      <div className="App">
        <Header icon={LocalGroceryStoreIcon}>Faker shop</Header>
        {/* <ProducesList /> */}
        <ProduceDetail />
      </div>
    </ThemeProvider>
  );
}

export default App;
