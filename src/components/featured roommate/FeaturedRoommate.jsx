import { Fade } from "react-awesome-reveal";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const FeaturedRoommate = ({ featuredPost }) => {
  const post = featuredPost;
  return (
    <div>
      <h1 className="font-primaryFont text-3xl pt-20 font-semibold text-center">
        Featured <span className="text-primary">Roommate</span>{" "}
      </h1>
      <p className="text-center w-[90%] text-xs sm:text-sm md:text-base sm:w-3/4 pt-3 mx-auto text-gray-500">
        <Typewriter
          words={["Verified profiles, top-rated roommates just for you!"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </p>
      <Fade cascade damping={0.2} triggerOnce={false}>
        <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-14">
          {post?.map((item) => (
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
                  {item.description}
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
      </Fade>
    </div>
  );
};

export default FeaturedRoommate;
