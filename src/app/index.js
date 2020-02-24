import React from 'react';

// Screens
import Facilitator from 'screens/facilitator';

// Contexts
import ApiProvider from 'contexts/api';
import MuiProvider from 'contexts/mui';

// Styling
import './index.scss';

const App = () => (
  <ApiProvider>
    <MuiProvider>
      <Facilitator />
    </MuiProvider>
  </ApiProvider>
);

export default App;
