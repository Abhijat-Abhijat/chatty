import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase/compat/app";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
function Chat() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }] = useStateValue();
  const [showDropdown, setShowDropdown] = useState(false); 
  const [showSearch, setShowSearch] = useState(false); 
  useEffect (() => {
    if(roomId){
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))
      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
        setMessages(snapshot.docs.map(doc => doc.data()))
      ))
    }
  }, [roomId])

  useEffect(() => {
    setSeed((Math.random() + 1).toString(36).substring(7));
  }, [roomId]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); 
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >>>", input);

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  const sendsearch = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <img
          src={`https://api.dicebear.com/6.x/personas/svg?seed=${seed}`}
          alt=""
        />
        <div className="chat_header_info">
          <h2>{roomName}</h2>
          <p>
            Last seen{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchIcon onClick={toggleSearch} />
            {/* Conditionally render the dropdown based on the state variable */}
            {showSearch && (
              <div className="dropsearch">
                <form action="">
                  <input
                    type="search"
                    name=""
                    id=""
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit" onClick={sendsearch}></button>
                </form>
              </div>
            )}
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon onClick={toggleDropdown} />
            {/* Conditionally render the dropdown based on the state variable */}
            {showDropdown && (
              <div className="drop_down">
                <ul>
                  <li>Google</li>
                  <li>Incognito</li>
                </ul>
              </div>
            )}
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) => (

        <p className={`chat_message ${message.name === user.displayName && "chat_receiver"}`}>
          <span className="chat_name">{message.name}</span>
          {message.message}
          <span className="chat_timestamp">
            {new Date(message.timestamp?.toDate()).toUTCString()}
          </span>
        </p>
        ))}
      </div>
      
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            <SendIcon />
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}


export default Chat;
