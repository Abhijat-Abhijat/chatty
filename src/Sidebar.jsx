import React, { useEffect } from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from './SidebarChat';
import { useState } from 'react';
import db from './firebase';

import './Sidebar.css'
import { IconButton } from '@mui/material';
function Sidebar() {

  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    ))
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <AccountCircleIcon />
        <div className="sidebar_header_right">
          <IconButton>
            <GroupsIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_search_container">
          <SearchIcon />
          <input type="text" placeholder="Search Chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat/>
        {
          rooms.map(room => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          ))
        }
      </div>
    </div>
  );
}

export default Sidebar