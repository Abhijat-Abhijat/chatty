import React from 'react'
import { IconButton } from '@mui/material'
// import Add from "@mui/icons-material/Add";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import NotesIcon from "@mui/icons-material/Notes";
import EmailIcon from "@mui/icons-material/Email";
import CelebrationIcon from '@mui/icons-material/Celebration';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import './custom.css'
function Custom() {
  return (
    <div className="custom">
      <IconButton>
        <LibraryMusicIcon />
      </IconButton>
      <IconButton>
        <NotesIcon />
      </IconButton>
      <IconButton>
        <DarkModeIcon />
      </IconButton>
      <IconButton>
        <EmailIcon />
      </IconButton>
      <IconButton>
        <CelebrationIcon />
      </IconButton>
    </div>
  );
}

export default Custom