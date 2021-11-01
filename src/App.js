import React from 'react'
import Provider from './context/appProvider';
import Main from './pages/Main';

function App() {
  return (
    <div>
         <Provider>
            <Main />
         </Provider>
    </div>
  );
}

export default App;
