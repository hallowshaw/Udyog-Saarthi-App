import { Outlet } from "react-router";
import "./App.css";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <Outlet />
      <Chat/>
    </>
  );
}

export default App;


// admin
// email - iamnewhere@gmail.com
// psswrd - iamnewhere