import './App.css';
import store from './redux/store';
import Bat from './Components/Bat';
import Ball from './Components/Ball';
import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
      <h1>Redux Demo App</h1>
      <Provider store = {store}>
          <Bat/>
          <Ball/>
      </Provider>
    </div>
  );
}

export default App;
