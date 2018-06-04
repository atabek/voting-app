import React, { Component } from 'react';

import TimersDashboard from '../../components/TimersDashboard/TimersDashboard';

class App extends Component {
  render() {
    return (
      <div id="main" class="main ui">
        <h1 class="ui dividing centered header">Timers</h1>
        <TimersDashboard />
      </div>
    );
  }
}

export default App;
