import React, { useEffect, useState } from "react";
import "./Chat.css";
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
  const [showDropdown, setShowDropdown] = useState(false); 
  const [showSearch, setShowSearch] = useState(false); 
  useEffect(() => {
    setSeed((Math.random() + 1).toString(36).substring(7));
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); 
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const sendMessage = (e) => {
    e.preventDefault();
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
          <h2>Room Name</h2>
          <p>Last Seen at ...</p>
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
        <p className={`chat_message ${true && "chat_receiver"}`}>
          <span className="chat_name">Rahul</span>
          Hey Guys
          <span className="chat_timestamp">3:52pm</span>
        </p>
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
