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

  // const [activeSection, setActiveSection] = useState("introduction");

  const handleSidebarClick = () => {
    console.log("Current sidebar state:", isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };

  // useEffect(() => {
  //   // Создаем новый IntersectionObserver
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id); // Устанавливаем активный раздел по ID
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.3, // Когда раздел на 50% виден
  //     }
  //   );

  //   // Настройка observer для всех разделов
  //   const sections = document.querySelectorAll("section");
  //   sections.forEach((section) => {
  //     observer.observe(section);
  //   });

  //   // Очистка observer при размонтировании компонента
  //   return () => {
  //     sections.forEach((section) => {
  //       observer.unobserve(section);
  //     });
  //   };
  // }, []);

  return (
    <div>
      <div className="box">
        <Sidebar isOpen={isSidebarOpen}/>

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
