import { useContext, useEffect, useState } from "react";
import bgImage from "../../assets/bgImg.jpg";
import { useLoaderData, useNavigation } from "react-router";
import { MdOutlinePhone } from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../components/loading/Loading";

const Details = () => {
  const details = useLoaderData();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  const { user } = useContext(AuthContext);
  const [initialCount, setInitialCount] = useState(details.likeCount || 0);
  const [owner, setOwner] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const isOwner = user.email === details.userEmail;
    setOwner(isOwner);
  }, [details.userEmail, user.email]);

  const handleLiked = (id) => {
    fetch(`https://roommate-finder-server-beta.vercel.app/post-details/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        likeCount: initialCount + 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setInitialCount(initialCount + 1);
          setShowContact(true);
        }
      })
      .catch(console.error);
  };

  return (
    <>
      {isNavigating && <Loading />}
      <div className="flex items-center justify-center h-screen max-h-[1000px] md:max-h-[1200px] xl:max-h-[1400px] relative">
        <img
          src={bgImage}
          alt=""
          className="absolute h-full w-full object-cover"
        />
        <div className="bg-[rgba(0,0,0,0.6)] absolute h-full w-full"></div>
        <div className="card card-border bg-transparent text-gray-200 backdrop-blur-sm shadow xl:w-1/3 w-[90%]">
          <div className="card-body pt-0 flex flex-col gap-1 text-base">
            <h2 className=" flex items-center justify-center ">
              <div className="bg-primary px-5 py-1 text-white">
                {initialCount} people interested in
              </div>
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <div>
                {details.profileImage ? (
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-11 rounded-full">
                      <img src={details.profileImage} alt="" />
                    </div>
                  </div>
                ) : (
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <span className="text-xl">{details.userName[0]}</span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-lg">{details.userName}</h1>
              </div>
            </div>
            <div className="mt-3 border-b-[1px]" />
            <h1 className=" pt-4 md:text-2xl text-base">{details.title}</h1>
            <p className="text-sm md:text-base">{details.description}</p>
            <p className="flex items-center gap-2 mt-3 text-sm md:text-base">
              <span className="text-primary">Available:</span>
              <span>{details.availability === "Available" ? "✓" : "✗"}</span>
            </p>
            <p className="flex items-center gap-2 text-sm md:text-base">
              <span className="text-primary">Location:</span>
              <span>{details.location}</span>
            </p>
            <p className="flex items-center gap-2 text-sm md:text-base">
              <span className="text-primary">Rent: </span>
              <span>{details.rent} ৳</span>
            </p>
            <p className="text-sm md:text-base">
              <span className="text-primary">Room-Type: </span>
              <span>{details.roomType}</span>
            </p>
            <p className="text-sm md:text-base">
              <span className="text-primary">Lifestyle: </span>
              <span>{details.lifestyle}</span>
            </p>
            <div className="card-actions justify-end flex flex-col mt-4 items-end">
              {owner ? (
                <button className="btn btn-sm md:btn-md bg-white border-gray-300 text-primary cursor-default">
                  Owner
                </button>
              ) : (
                <button
                  className="btn btn-sm md:btn-md btn-primary transition-all tracking-widest duration-300"
                  onClick={() => handleLiked(details._id)}
                >
                  Like
                </button>
              )}
              {showContact && !owner && (
                <p className="flex gap-1 items-center pt-2">
                  <MdOutlinePhone />
                  {details?.contact}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
