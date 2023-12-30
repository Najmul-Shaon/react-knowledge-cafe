import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  // use state for bookmarks
  const [bookmarks, setBookmarks] = useState([]);
  // handle for bookmark button
  const handleBookmarksBtn = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  // use state for reading time calculation
  const [readingTime, setReadingTime] = useState(0);
  // handle for mark as read button
  const handleReadingBtn = (time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
  };

  return (
    <>
      <Header></Header>
      <div className="md: flex max-w-6xl mx-auto gap-4">
        <Blogs
          handleBookmarksBtn={handleBookmarksBtn}
          handleReadingBtn={handleReadingBtn}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
