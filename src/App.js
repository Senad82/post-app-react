import { useEffect, useState } from "react";
import "./App.css";
import API from "./services/API";
import Sidebar from "./components/Sidebar";

function App() {
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    API.getAllTags().then((data) => {
      setAllTags(data);
    });
  }, []);

  return (
    <>
      <header className="container-fluid py-5 bg-dark bg-opacity-10 text-center">
        <h1>Blog Post App</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-2">
            {allTags.length > 0 && <Sidebar tags={allTags} />}
          </div>
          <div className="col-10"></div>
        </div>
      </div>
    </>
  );
}

export default App;
