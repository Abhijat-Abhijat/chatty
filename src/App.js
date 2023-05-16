import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Custom from './Custom';
import Login from './Login';
import { Switch } from '@mui/material';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function App() {
  // const [darkMode, setDarkMode] = React.useState(false);
  // const [user , setUser] = React.useState(null);
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (  
        <Login/>
      ) : (

      <div className="app_body">
        <Router>
          <Sidebar />
          {/* <Custom /> */}
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />

            {/* <Route path="/" element={<Chat />} /> */}
          </Routes>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
