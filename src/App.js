import logo from './logo.svg';
import './App.scss';
import NavBar from './component/NavBar';
import Todo from './component/Todo';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store()}>


      <div className="App">

        <NavBar />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
