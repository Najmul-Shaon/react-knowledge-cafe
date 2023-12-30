import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmarkBtn }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog_data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h3 className="text-3xl mb-4">Blogs: {blogs.length}</h3>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmarkBtn={handleBookmarkBtn}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmarkBtn: PropTypes.func.isRequired,
};

export default Blogs;
