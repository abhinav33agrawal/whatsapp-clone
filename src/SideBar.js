import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./SideBar.css";
import SideBarChat from "./SideBarChat";
function SideBar() {
  return (
    <div className="sidebar">
    <div className="sidebar__header">
        <Avatar/>
        <div className="sidebar__headerRight">
        <IconButton>
                <DonutLarge/>
        </IconButton>
        <IconButton>
                <Chat/>
        </IconButton>
        <IconButton>
                <MoreVert/>
        </IconButton>
        </div>
    </div>
    <div className="sidebar__search">
        <div className="sidebar__searchContainers">

        <SearchOutlined/>
        <input placeholder = 'Start a new chat'/>
        </div>
    </div>
    <div className="sidebar__chats">
    <SideBarChat addnewChat />
    <SideBarChat/>
    <SideBarChat/>
    <SideBarChat/>
    </div>
    </div>
  );
}

export default SideBar;
