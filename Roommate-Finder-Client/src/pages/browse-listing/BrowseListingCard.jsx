import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const BrowsListingCard = () => {
  const items = useLoaderData();
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterText, setFilterText] = useState("");

  const sortedFilteredItems = items
    .filter((item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  return (
    <div className="px-4 lg:px-16 pt-10 pb-20">
      <h1 className="text-3xl font-bold text-center">
        All <span className="text-primary">Posts</span>
      </h1>
      <p className="text-center w-[90%] text-xs sm:text-sm md:text-base sm:w-3/4 pt-3 mx-auto text-gray-500">
        <Typewriter
          words={["Explore all available roommate posts in one place."]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-4 my-10">
        <input
          type="text"
          placeholder="Search by title..."
          className="border px-4 py-2 border-gray-200 rounded w-full md:max-w-xs outline-none"
          onChange={(e) => setFilterText(e.target.value)}
        />
        <select
          className="border px-4 py-2 border-gray-200 rounded w-full md:max-w-xs outline-none "
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort: A-Z</option>
          <option value="desc">Sort: Z-A</option>
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
        {sortedFilteredItems.map((item) => (
          <div
            key={item._id}
            className="shdaow p-6 border rounded-2xl border-primary flex flex-col"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div>
                  {item.profileImage ? (
                    <div className="avatar rounded-full avatar-placeholder">
                      <div className="bg-neutral text-neutral-content w-12 rounded-full">
                        <img src={item.profileImage} alt="" />
                      </div>
                    </div>
                  ) : (
                    <div className="avatar rounded-full avatar-placeholder">
                      <div className="border-primary border w-12 rounded-full">
                        <span className="text-xl font-bold">
                          {item.userName[0]}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <h1 className="text-xl font-semibold">{item.userName}</h1>
              </div>
              <h1 className="text-lg font-semibold mt-4">{item.title}</h1>
              <p className="text-gray-500 pt-2 text-sm sm:text-base">
                {item.description.length > 100
                  ? item.description.slice(0, 100) + "..."
                  : item.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="flex items-center gap-2 pt-2 text-sm sm:text-base">
                <span>
                  <IoLocationOutline size={20} />
                </span>
                <span className="text-gray-400">{item.location}</span>
              </p>
              <Link to={`/details/${item._id}`}>
                <button className="btn btn-primary btn-sm sm:btn-md hover:btn-outline hover:bg-transparent hover:text-primary">
                  See more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsListingCard;
