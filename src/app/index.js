import React from 'react';

// Components
import Calendar from 'calendar';
import Cover from 'cover';

// Contexts
import ApiProvider from 'context/api';

// Styling
import './index.scss';

const App = () => (
  <ApiProvider>
    <Cover />
    <Calendar />
  </ApiProvider>
);

export default App;
