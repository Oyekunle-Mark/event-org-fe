import React from 'react';

import { EventService } from './services/events';
import EventScreen from './components/EventScreen';

const App = () => {
  const event = new EventService();

  return (
    <div>
      <EventScreen event={event} />
    </div>
  );
};

export default App;
