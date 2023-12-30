import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  console.log(title);
  return (
    <div className="text-lg bg-white p-5 mb-4 rounded-lg font-semibold ">
      <h2>{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
