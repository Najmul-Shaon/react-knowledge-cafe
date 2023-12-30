import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  // console.log(bookmarks);
  return (
    <div className=" md:w-1/3 bg-[#1111110d] text-black rounded-lg p-7">
      <h2 className="text-2xl mb-4 font-bold">Bookmarked Blogs:{bookmarks.length}</h2>
      {bookmarks.map(
        (bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        )
        // console.log(bookmark)
      )}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
