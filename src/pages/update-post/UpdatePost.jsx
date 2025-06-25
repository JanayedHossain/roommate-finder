import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { Navigate, useLoaderData, useNavigate } from "react-router";

const UpdatePost = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const postData = useLoaderData();
  const navigate = useNavigate();
  if (user.email === postData.userEmail) {
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
      };
      fetch(
        `https://roommate-finder-server-beta.vercel.app/update/${postData._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            toast.success("Post updated successfully!");
            navigate("/my-listing");
          } else {
            toast.error("Something went wrong. Please try again.");
          }
        })
        .catch((error) => console.log(error));
    };

    return (
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:max-w-[60%] mx-auto p-6 border border-gray-200 rounded-2xl my-16">
        <h2 className="text-2xl font-bold mb-14 text-center font-primaryFont">
          Update Post
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
            defaultValue={postData.title}
            required
            className="outline-primary p-3 rounded-sm w-full border border-gray-300 col-span-1 lg:col-span-2"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            defaultValue={postData.location}
            required
            className="outline-primary p-3 rounded-sm w-full border border-gray-300"
          />
          <input
            type="number"
            name="rent"
            placeholder="Rent Amount"
            defaultValue={postData.rent}
            required
            className="outline-primary p-3 rounded-sm w-full border border-gray-300"
          />

          <select
            name="roomType"
            required
            defaultValue={postData.roomType}
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
            defaultValue={postData.availability}
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
            defaultValue={postData.lifestyle}
            required
            className="outline-primary p-3 rounded-sm w-full border border-gray-300"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Info"
            defaultValue={postData.contact}
            required
            className="outline-primary p-3 rounded-sm w-full border border-gray-300"
          />

          <textarea
            name="description"
            placeholder="Description"
            defaultValue={postData.description}
            required
            className="outline-primary p-3 rounded-sm border border-gray-300 md:col-span-2 col-span-1 lg:col-span-2 w-full resize-none"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary md:col-span-2 hover:btn-outline hover:bg-transparent hover:text-primary"
          >
            Update
          </button>
        </form>
      </div>
    );
  } else {
    return <Navigate to={"/login"} />;
  }
};
export default UpdatePost;
