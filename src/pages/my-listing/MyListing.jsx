import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../components/loading/Loading";
import { Link, useNavigate, useNavigation } from "react-router";
import { toast } from "react-toastify";
import emptyImg from "../../assets/empty.jpg";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [myPost, setMyPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const email = user?.email;
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://roommate-finder-server-beta.vercel.app/post/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPost(data);
        setIsLoading(false);
      })
      .catch(console.error());
  }, [email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This post will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roommate-finder-server-beta.vercel.app/post/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
              const remainingPost = myPost.filter((item) => item._id !== id);
              setMyPost(remainingPost);
            } else {
              toast.error("Something went wrong. Please try again.");
            }
          })
          .catch(console.error());
      }
    });
  };

  return (
    <>
      {isLoading && <Loading />}
      {myPost.length > 0 ? (
        <div className="w-[95%] max-w-6xl mx-auto mb-24">
          <h1 className="font-primaryFont py-10 text-3xl font-semibold text-center">
            My <span className="text-primary">Listing</span>
          </h1>
          <Fade cascade triggerOnce={false} damping={0.2}>
            <div className="overflow-x-auto">
              <table className="min-w-full table-fixed border border-gray-200">
                <thead className="bg-primary text-white ">
                  <tr>
                    <th className="p-3 w-[50%] sm:w-auto text-left">Title</th>
                    <th className="p-3 text-left">Location</th>
                    <th className="p-3 text-left">Rent</th>
                    <th className="p-3 text-left">Availability</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myPost?.map((singlePost) => (
                    <tr
                      key={singlePost._id}
                      className="border-b border-gray-200 hover:border-primary group transition"
                    >
                      <td
                        className="p-3 text-sm sm:text-base font-semibold truncate group-hover:text-primary cursor-pointer"
                        onClick={() => navigate(`/details/${singlePost?._id}`)}
                      >
                        {singlePost.title.length > 25
                          ? singlePost.title?.slice(0, 25) + "..."
                          : singlePost.title}
                      </td>
                      <td className="p-3 text-sm sm:text-base">
                        {singlePost.location}
                      </td>
                      <td className="p-3 text-sm sm:text-base">
                        {singlePost.rent}৳
                      </td>
                      <td className="p-3 text-sm sm:text-base">
                        {singlePost.availability}
                      </td>
                      <td className="p-3 text-sm sm:text-base flex flex-col sm:flex-row gap-2">
                        <Link to={`/update/${singlePost._id}`}>
                          <button className="btn btn-sm btn-outline btn-primary w-full sm:w-auto">
                            Update
                          </button>
                        </Link>

                        <button
                          className="btn btn-sm btn-outline btn-error w-full sm:w-auto"
                          onClick={() => handleDelete(singlePost._id)}
                        >
                          Delete
                        </button>
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
                You haven't added any listings yet.
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

export default MyListing;
