import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Custom from './Custom';
function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
        <Custom/>
      </div>
    </div>
  );
}

export default App;
