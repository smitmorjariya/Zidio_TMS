import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
// import Home from "./pages/Home";

function App() {

  const [sidebarToggle, setSidebarToggle] = useState(false)
    return (
      <div className="flex " >
        <Sidebar sidebarToggle={sidebarToggle} />
        <Dashboard  
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}/>
        
      </div>
  );
}

export default App;
