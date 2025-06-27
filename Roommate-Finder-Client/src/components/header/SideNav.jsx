import { NavLink } from "react-router";

const SideNav = () => {
  return (
    <aside className="flex lg:flex-col w-full col-span-2 sticky top-20 py-4 bg-white justify-center lg:justify-normal">
      <NavLink
        to="/dashboard"
        end
        className="btn bg-transparent border-none shadow hover:shadow-md"
      >
        Overview
      </NavLink>
      <NavLink
        to="browse-listing"
        className="btn bg-transparent border-none shadow hover:shadow-md"
      >
        Browse Listing
      </NavLink>
      <NavLink
        to="add-to-find-roommate"
        className="btn bg-transparent shadow border-none hover:shadow-md"
      >
        Add to Find Roommate
      </NavLink>
      <NavLink
        to="my-listing"
        className="btn bg-transparent border-none shadow hover:shadow-md"
      >
        My Listing
      </NavLink>
    </aside>
  );
};

export default SideNav;
