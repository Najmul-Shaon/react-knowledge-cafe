import PropTypes from "prop-types";
const Blog = ({ blog }) => {
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
  console.log(hashtags);
  return (
    <div>
      <img className="w-full" src={img} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <img className="w-14 rounded-full" src={author_img} alt="" />
          </div>
          <div className="mx-6">
            <h3 className="text-black text-2xl font-bold">{author_name}</h3>
            <p>ID: {id}</p>
            <p className="text-sm font-semibold text-black/60">{post_date}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-black/60">
            {reading_time} min to read
          </p>
        </div>
      </div>
      <h3 className="text-black text-4xl font-bold">{title}</h3>
      <p>
        {hashtags.map((hash, idx) => (
          <span className="mr-4" key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
