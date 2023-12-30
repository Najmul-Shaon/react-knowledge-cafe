import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmarksBtn, handleReadingBtn }) => {
  //   console.log(blog);
  const {
    id,
    title,
    img,
    author_name,
    author_img,
    post_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full rounded-lg" src={img} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center mt-8">
          <div>
            <img className="w-14 rounded-full" src={author_img} alt="" />
          </div>
          <div className="mx-6">
            <h3 className="text-black text-2xl font-bold">{author_name}</h3>
            <p>ID: {id}</p>
            <p className="text-sm font-semibold text-black/60">{post_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm font-medium text-black/60">
            {reading_time} min to read
            <button
              onClick={() => handleBookmarksBtn(blog)}
              className="ml-2 text-sm text-red-600"
            >
              <FaRegBookmark></FaRegBookmark>
            </button>
          </p>
        </div>
      </div>
      <h3 className="text-black text-4xl font-bold mt-4">{title}</h3>
      <p className="mt-4">
        {hashtags.map((hash, idx) => (
          <span className="mr-4" key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleReadingBtn(reading_time)}
        className="mt-5 underline text-[#6047EC] text-lg font-semibold"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarksBtn: PropTypes.func.isRequired,
  handleReadingBtn: PropTypes.func.isRequired,
};

export default Blog;
