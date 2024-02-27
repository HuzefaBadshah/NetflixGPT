import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body/Body';
import { appStore } from './redux/store/appstore';

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
