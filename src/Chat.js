import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Chat.css";
function Chat() {
  return <div className="chat">
      <div className="chat__header">
        <Avatar src="https://avatars.dicebear.com/api/human/23.svg"/>
        <div className="chat__headerInfo">
            <h3>
                Room Name
            </h3>
            <p> Last Seen at ...</p>
        </div>
        <div className="chat__headerInfoRight">
            <IconButton>
                <SearchOutlined/>
            </IconButton>
            <IconButton>
                <AttachFile/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
        <span className="chat__name">Abhinav </span>
        H
        <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>
      <div className="chat__footer">

      </div>
  </div>;
}

export default Chat;
