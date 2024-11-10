import { Link } from "react-router-dom";

const HeroTexts = () => {
  return (
    <div className="px-5 lg:px-0">
      <div className="hero pb-28 lg:pt-10 sm:pb-56 bg-[#9538E2] text-white container mx-auto rounded-b-2xl">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Explore a World of Stories, Knowledge, and Imagination
            </h1>
            <p className="py-6 max-w-xl mx-auto">
              {` "Explore an Extensive Collection of Books Across Every Genre.
              Whether You're Looking for Classic Literature, Thrilling Fiction,
              or Thought-Provoking Nonfiction, We Have Something for Every
              Reader" `}
            </p>
            <Link to={"/dashboard"}>
              <button className="bg-white text-[#9538E2] py-2 px-5 rounded-full font-semibold">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTexts;
