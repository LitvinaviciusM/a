import React from 'react';

// Screens
import Salon from 'screens/salon';

// Contexts
import ApiProvider from 'contexts/api';

// Styling
import './index.scss';

const App = () => (
  <ApiProvider>
    <Salon />
  </ApiProvider>
);

export default App;
