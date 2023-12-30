import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmarksBtn }) => {
  // console.log(handleBookmarksBtn);
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
          handleBookmarksBtn={() => handleBookmarksBtn(blog)}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmarksBtn: PropTypes.func.isRequired,
};

export default Blogs;
