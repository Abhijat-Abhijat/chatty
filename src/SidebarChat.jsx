import React , { useEffect , useState } from 'react'
import './SidebarChat.css';
import db from './firebase';
import {Link} from 'react-router-dom';
import AddIcon from "@mui/icons-material/Add";
function SidebarChat({id, name, addNewChat}) {
  const [seed , setSeed] = useState("");
  const [messages, setMessages] = useState("");
  useEffect(() => {
    if(id){
      db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
        setMessages(snapshot.docs.map(doc => doc.data()))
      ))
    }
  }, [id])

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
    <Link to={`/rooms/${id}`}>
    <div className="sidebar_chat">
      <img
        src={`https://api.dicebear.com/6.x/personas/svg?seed=${seed}`}
        alt=""
      />
      <div className="sidebar_chat_info">
        <h2>{name}</h2>
        <p>{messages[0]?.message}</p>
      </div>
    </div>
    </Link>
  ):(
    <div onClick={createChat} className="sidebar_chat">
      <h2> <AddIcon/> New Chat Group</h2>
    </div>
  );
}

export default SidebarChat