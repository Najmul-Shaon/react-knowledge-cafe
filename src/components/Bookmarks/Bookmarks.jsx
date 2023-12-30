import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 text-black">
      <h3 className="text-[#6047EC] text-2xl font-bold text-center bg-[#6047ec1a] p-5 mb-6 rounded-lg mt-14">
        Spent time on read :{readingTime} read
      </h3>
      <div className="bg-[#1111110d]  rounded-lg p-7">
        <h2 className="text-2xl mb-4 font-bold">
          Bookmarked Blogs:{bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark
            key={bookmark.id}
            bookmark={bookmark}
            readingTime={readingTime}
          ></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
