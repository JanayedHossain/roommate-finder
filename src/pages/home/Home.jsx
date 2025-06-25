import { useLoaderData, useNavigation } from "react-router";
import FeaturedRoommate from "../../components/featured roommate/FeaturedRoommate";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { useEffect, useState } from "react";
import HowItWorks from "../../components/how-it-works/HowItWorks";
import FAQ from "../../components/faq/Faq";
import Slider from "../../components/slider/Slider";
import Loading from "../../components/loading/Loading";

const Home = () => {
  const featuredPost = useLoaderData();
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation()
  const isNavigating = Boolean(navigation.location);
  useEffect(() => {
    window.scrollTo(0, 0);
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme === "true") {
      setToggle(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", toggle);
  }, [toggle]);

  return (
    <>
      {isNavigating&&<Loading/>}
      <div className={toggle ? "bg-black text-white" : ""}>
        <div
          className="fixed flex items-center justify-center h-10 w-10 bg-primary top-1/2 -right-8 z-20 text-white transition-all duration-400 hover:right-0 group cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <MdSunny size={20} /> : <BsFillMoonStarsFill size={20} />}

          <span className="absolute h-14 w-6 bg-primary top-1/2 -left-4 -translate-y-1/2 flex items-center justify-center group-hover:opacity-0">
            <span className="text-xs text-white font-semibold transform -rotate-90 origin-center">
              hover
            </span>
          </span>
        </div>

        <Slider />
        <FeaturedRoommate featuredPost={featuredPost} />
        <HowItWorks />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
