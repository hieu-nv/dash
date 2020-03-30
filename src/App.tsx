import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { AppProvider } from "./providers/AppProvider";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <NavBar />
    </AppProvider>
  );
}

export default App;
