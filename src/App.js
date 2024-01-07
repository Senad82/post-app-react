import { useEffect, useState } from "react";
import "./App.css";
import API from "./services/API";
import Sidebar from "./components/Sidebar";
import PostLayout from "./components/PostLayout";

function App() {
  const [allTags, setAllTags] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [filteredPost, setFilteredPost] = useState([]);

  useEffect(() => {
    API.getAllTags().then((data) => {
      setAllTags(data);
    });
    API.getAllPosts().then((data) => {
      setAllPosts(data);
    });
  }, []);

  useEffect(() => {
    let filtered = allPosts.filter((post) => {
      return post.tags.includes(selectedTag);
    });
    console.log(filtered);
  }, [selectedTag]);

  return (
    <>
      <header className="container-fluid py-5 bg-dark bg-opacity-10 text-center">
        <h1>Blog Post App</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-2">
            {allTags.length > 0 && (
              <Sidebar tags={allTags} selectedTag={setSelectedTag} />
            )}
          </div>
          <div className="col-10">
            <p className="my-5 text-center">Chose category from sidebar:</p>
            <PostLayout  posts={filteredPost} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
