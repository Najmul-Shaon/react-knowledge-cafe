import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog_data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="border-2 border-orange-500 border-solid md:w-2/3">
      <h3 className="text-3xl">Blogs: {blogs.length}</h3>
    </div>
  );
};

export default Blogs;
