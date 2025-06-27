import { useLoaderData, useNavigation } from "react-router";
import { Link } from "react-router";
import emptyImg from "../../assets/empty.jpg";
import { Fade } from "react-awesome-reveal";
import Loading from "../../components/loading/Loading";
import { useEffect } from "react";
const BrowseListings = () => {
  const posts = useLoaderData();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      {isNavigating && <Loading />}
      {posts.length > 0 ? (
        <div className="w-[95%] max-w-6xl mx-auto mt-10 mb-24">
          <h1 className="text-3xl font-bold text-center mb-10">
            Browse <span className="text-primary">Listings</span>
          </h1>
          <Fade cascade triggerOnce={false} damping={0.2}>
            <div className="overflow-x-auto">
              <table className="min-w-full table-fixed border border-gray-200">
                <thead className="bg-primary text-white ">
                  <tr>
                    <th className="p-3 w-[50%] sm:w-auto text-left">Title</th>
                    <th className="p-3 text-left">Location</th>
                    <th className="p-3 text-left">Rent</th>
                    <th className="p-3 text-left">Room Type</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {posts?.map((singlePost) => (
                    <tr
                      key={singlePost?._id}
                      className="border-b border-gray-200 hover:border-primary hover:text-primary transition"
                    >
                      <td className="p-3 text-sm sm:text-base font-semibold truncate">
                        {singlePost?.title.length > 25
                          ? singlePost?.title?.slice(0, 25) + "..."
                          : singlePost?.title}
                      </td>
                      <td className="p-3 text-sm sm:text-base">{singlePost?.location}</td>
                      <td className="p-3 text-sm sm:text-base">{singlePost?.rent}৳</td>
                      <td className="p-3 text-sm sm:text-base">{singlePost?.roomType}</td>
                      <td className="p-3 flex flex-col sm:flex-row gap-2">
                        <Link to={`/details/${singlePost?._id}`}>
                          <button className="btn btn-sm btn-outline btn-primary  sm:w-auto min-w-20 w-full">
                            See More
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Fade>
        </div>
      ) : (
        <>
          {isNavigating && <Loading />}

          <Fade cascade triggerOnce={false} damping={0.2}>
            <div className="text-center py-20">
              <img
                src={emptyImg}
                alt="No Posts Found"
                className="mx-auto w-6/12 sm:w-5/12 md:w-4/12"
              />
              <p className="text-sm sm:text-lg text-gray-600 mt-4">
                No roommate listings found.
              </p>
              <Link to={"/add-to-find-roommate"}>
                <button className="btn btn-primary mt-5 hover:bg-transparent hover:btn-outline hover:text-primary">
                  Add New Listing”
                </button>
              </Link>
            </div>
          </Fade>
        </>
      )}
    </>
  );
};

export default BrowseListings;
