import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./Sidebar/Sidebar";
import Introduction from "./Introduction/Introduction";
import Programs from "./Programs/Programs";
import Advantages from "./Advantages/Advantages";
import ExtraCurricular from "./ExtraCurricular/ExtraCurricular";
import Contacts from "./Contacts/Contacts";
import Gallery from "./Gallery/Gallery";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClick = () => {
    console.log("Current sidebar state:", isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="box">
        <Sidebar isOpen={isSidebarOpen} />

        <main className={`content ${isSidebarOpen ? "" : "full-screen"}`}>
          <Introduction handleSidebarClick={handleSidebarClick} />

          <Programs />

          <Advantages />

          <ExtraCurricular />

          <Gallery />

          <Contacts />
        </main>
      </div>
    </div>
  );
};

export default App;
