import React , { useEffect , useState } from 'react'
import './SidebarChat.css';
import db from './firebase';
function SidebarChat({id, name, addNewChat}) {
  const [seed , setSeed] = useState("");
  useEffect(() => {
    setSeed((Math.random() + 1).toString(36).substring(7));
  }, []);

  const createChat = () => {
    const roomName = prompt("Pls enter name for chat");
    if(roomName){
      //db stuff
      db.collection('rooms').add({
        name: roomName,
      })
    }
  };

  return !addNewChat ? (
    <div className="sidebar_chat">
      <img
        src={`https://api.dicebear.com/6.x/personas/svg?seed=${seed}`}
        alt=""
      />
      <div className="sidebar_chat_info">
        <h2>{name}</h2>
        <p>{id}</p>
      </div>
    </div>
  ):(
    <div onClick={createChat} className="sidebar_chat">
      <h2> Add New Chat</h2>
    </div>
  );
}

export default SidebarChat