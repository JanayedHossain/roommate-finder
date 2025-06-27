import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import LogIn from "../pages/login/Login";
import Home from "../pages/home/Home";
import RoommateAddForm from "../pages/add-to-find-roommate/RoommateAddForm";
import PrivateRoute from "../provider/PrivateRoute";
import BrowseListing from "../pages/browse-listing/BrowseListing";
import MyListing from "../pages/my-listing/MyListing";
import SignUp from "../pages/signup/SignUp";
import Loading from "../components/loading/Loading";
import Details from "../pages/post-details/Details";
import UpdatePost from "../pages/update-post/UpdatePost";
import NotFound from "../pages/not-found/NotFound";
import Dashboard from "../layout/Dashboard";
import Overview from "../pages/overview/Overview";
import BrowsListingCard from "../pages/browse-listing/BrowseListingCard";
import AboutUs from "../pages/about-us/AboutUs";
import Contact from "../pages/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://roommate-finder-server-beta.vercel.app/availability"),
        HydrateFallback: Loading,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/all-posts",
        Component: BrowsListingCard,
        loader: () =>
          fetch("https://roommate-finder-server-beta.vercel.app/post"),
        HydrateFallback: Loading,
      },

      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-beta.vercel.app/post-details/${params.id}`
          ),
        HydrateFallback: Loading,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdatePost />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-beta.vercel.app/post-details/${params.id}`
          ),
        HydrateFallback: Loading,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: Overview,
        loader: () =>
          fetch("https://roommate-finder-server-beta.vercel.app/post"),
        HydrateFallback: Loading,
      },
      {
        path: "browse-listing",
        Component: BrowseListing,
        loader: () =>
          fetch("https://roommate-finder-server-beta.vercel.app/post"),
        HydrateFallback: Loading,
      },
      {
        path: "add-to-find-roommate",
        element: (
          <PrivateRoute>
            <RoommateAddForm />
          </PrivateRoute>
        ),
      },
      {
        path: "my-listing",
        element: (
          <PrivateRoute>
            <MyListing />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
