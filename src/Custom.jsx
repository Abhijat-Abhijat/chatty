import React from "react";
import { useState } from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import NotesIcon from "@mui/icons-material/Notes";
import EmailIcon from "@mui/icons-material/Email";
import CelebrationIcon from "@mui/icons-material/Celebration";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./custom.css";
import MusicPlayer from "./MusicPlayer";
import Todo from "./Todo";
import Chess from "./Chess";

function Custom() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  const getButtonClass = (buttonName) => {
    if (activeButton === buttonName) {
      return "";
    } else {
      return "";
    }
  };

  const widthchanger = () => {
    const button = document.querySelector(".custom");
    button.classList.toggle("active");
  };
  return (
    <div className="custom">
      <LibraryMusicIcon
        className={getButtonClass("music")}
        onClick={() => handleButtonClick("music")}
      />
      {activeButton === "music" && <MusicPlayer />}
      <NotesIcon
        className={getButtonClass("todo")}
        onClick={() => handleButtonClick("todo")}
      />
      {activeButton === "todo" && <Todo />}
      <DarkModeIcon
        className={getButtonClass("darkmode")}
        onClick={() => handleButtonClick("darkmode")}
      />
      <EmailIcon
        className={getButtonClass("email")}
        onClick={() => handleButtonClick("email")}
      />
      <CelebrationIcon
        className={getButtonClass("chess")}
        onClick={() => handleButtonClick("chess")}
      />
      {activeButton === "chess" && <Chess />}
    </div>
  );
}

export default Custom;
