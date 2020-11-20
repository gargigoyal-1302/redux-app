import React from 'react';
import {Provider} from 'react-redux';
import store from './components/redux/store'
import CakeContainer from './components/cakecontainer'
import HooksCakeContainer from './components/hookscakecontainer'
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CakeContainer/>
      <HooksCakeContainer/>
       </div>

    </Provider>
    
  );
}

export default App;
