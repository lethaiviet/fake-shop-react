import store from '@/redux/stores';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from '@components/Header'
import ProducesList from '@components/ProducesList';
import { SnackbarProvider } from 'notistack';

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ProduceDetail from './components/ProduceDetail';


function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header icon={LocalGroceryStoreIcon}>Faker shop</Header>}>
              <Route path="/" element={<ProducesList />} />
              <Route path="/produce/:produceId" element={<ProduceDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </SnackbarProvider>
    </Provider>
  );
}

export default App;
