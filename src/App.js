import store from '@/redux/stores';
import { Provider } from 'react-redux';

import Header from '@components/Header'
import ProducesList from './components/ProducesList';

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header icon={LocalGroceryStoreIcon}>Faker shop</Header>
        <ProducesList />
      </div>
    </Provider>
  );
}

export default App;
