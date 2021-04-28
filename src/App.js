import "./App.css";
import "./SideBar.js";
import SideBar from "./SideBar.js";
import Chat from "./Chat";
function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* SideBAr */}
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
