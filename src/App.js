import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import TableComponent from './Components/Table';
import { Provider } from 'react-redux';
import store from './Store';
import Modals from './Components/Modal'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Card />
      <TableComponent />
      <Modals />
    </div>
    </Provider>
  );
}

export default App;
