import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { useNavigation } from "react-router";
import Loading from "../../components/loading/Loading";

const AddRoommateForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      title: form.title.value,
      location: form.location.value,
      rent: form.rent.value,
      roomType: form.roomType.value,
      lifestyle: form.lifestyle.value,
      availability: form.availability.value,
      contact: form.contact.value,
      description: form.description.value,
      userName: user?.displayName,
      userEmail: user?.email,
      profileImage: user?.photoURL,
      likeCount: 0,
    };
    fetch("https://roommate-finder-server-beta.vercel.app/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          toast.success("Added Successfull");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {isNavigating && <Loading />}
      <Fade cascade damping={0.2} triggerOnce={false}>
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:max-w-[60%] mx-auto p-6 border border-gray-200 rounded-2xl my-16">
          <h2 className="text-2xl font-bold mb-14 text-center font-primaryFont">
            Add Roommate Listing
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 grid-cols-1 lg:grid-cols-2 "
          >
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              readOnly
              className="outline-none p-3 rounded-sm w-full bg-gray-100"
            />
            <input
              type="email"
              name="userEmail"
              defaultValue={user?.email}
              readOnly
              className="outline-none p-3 rounded-sm w-full bg-gray-100"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
              className="outline-primary p-3 rounded-sm w-full border border-gray-300 col-span-1 lg:col-span-2"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
              className="outline-primary p-3 rounded-sm w-full border border-gray-300"
            />
            <input
              type="number"
              name="rent"
              placeholder="Rent Amount"
              required
              className="outline-primary p-3 rounded-sm w-full border border-gray-300"
            />

            <select
              name="roomType"
              required
              defaultValue=""
              className="outline-primary p-3 rounded-sm w-full border border-gray-300"
            >
              <option value="" disabled>
                Room Type
              </option>
              <option value="Single">Single</option>
              <option value="Shared">Shared</option>
            </select>

            <select
              name="availability"
              required
              defaultValue=""
              className="outline-primary p-3 rounded-sm w-full border border-gray-300"
            >
              <option value="" disabled>
                Availability
              </option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
            <input
              type="text"
              name="lifestyle"
              placeholder="Lifestyle (e.g., Pets, Smoking)"
              required
              className="outline-primary p-3 rounded-sm w-full border border-gray-300"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              required
              className="outline-primary p-3 rounded-sm w-full border border-gray-300"
            />

            <textarea
              name="description"
              placeholder="Description"
              required
              className="outline-primary p-3 rounded-sm border border-gray-300 md:col-span-2 col-span-1 lg:col-span-2 w-full resize-none"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary md:col-span-2 hover:btn-outline hover:bg-transparent hover:text-primary"
            >
              Add
            </button>
          </form>
        </div>
      </Fade>
    </>
  );
};
export default AddRoommateForm;
