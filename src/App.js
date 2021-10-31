import React from 'react'
import './App.css';
import Provider from './context/appProvider';

function App() {
  return (
    <div>
         <Provider>
           test
         </Provider>
    </div>
  );
}

export default App;
