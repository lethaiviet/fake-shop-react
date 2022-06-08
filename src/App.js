import store from '@/redux/stores';
import { Provider } from 'react-redux';

import Header from '@components/Header'
import ProducesList from '@components/ProducesList';
import { SnackbarProvider } from 'notistack';

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';


function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <div className="App">
          <Header icon={LocalGroceryStoreIcon}>Faker shop</Header>
          <ProducesList />
        </div>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
