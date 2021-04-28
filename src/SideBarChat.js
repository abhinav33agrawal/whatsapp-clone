import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SideBarChat.css";
function SideBarChat({ addnewChat }) {
  const [seed, setseed] = useState("");
  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, []);
  const createnewChat = () => {
    const roomName = prompt("Please Enter room name");
    if (roomName) {
    }
  };
  return !addnewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h1>Room name</h1>
        <p>Last message ...</p>
      </div>
    </div>
  ) : (
    <div onClick={createnewChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SideBarChat;
