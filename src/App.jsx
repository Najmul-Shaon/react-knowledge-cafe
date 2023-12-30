import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const handleBookmarkBtn = (bookmark) => {
    console.log(bookmark, "added to bookmarks");
  };
  return (
    <>
      <Header></Header>
      <div className="md: flex max-w-6xl mx-auto">
        <Blogs handleBookmarkBtn={handleBookmarkBtn}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
