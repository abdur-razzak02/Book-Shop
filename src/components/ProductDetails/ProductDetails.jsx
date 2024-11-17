import { useLoaderData, useParams } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";
import {
  addToStoredCartList,
  addToStoredFavouriteList,
} from "../Utility/Utility";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const products = useLoaderData();

  const product = products?.find((cart) => cart.product_id === id);

  const {
    product_title,
    author,
    product_image,
    price,
    description,
    category,
    publisher,
    year_of_publish,
    pages,
    availability,
    rating,
  } = product;

  const handelAddToCart = (id, availability) => {
    addToStoredCartList(id, availability);
  };

  return (
    <div className="bg-[#9538E2] relative sm:mb-72 py-10">
      <Helmet>
        <title>{product_title} | Noble Readers </title>
      </Helmet>
      <div className="px-5 lg:px-0 container mx-auto sm:pb-36">
        <div className="hero text-white container mx-auto rounded-b-2xl sm:pb-10 sm:mb-10">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-3xl lg:text-5xl font-bold">Book Details</h1>
              <p className="py-6 max-w-xl mx-auto">
                Discover key details, author insights, and the journey each book
                takes you on before you turn the first page.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white backdrop-blur-2xl border-2 mx-5 sm:w-3/4 rounded-xl sm:mx-auto sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-1/2 flex flex-col sm:flex-row gap-0 sm:gap-5">
        <div className="sm:w-2/5 flex items-center justify-center rounded-xl">
          <img
            src={product_image}
            alt="book_image"
            className="h-full w-full object-cover rounded-xl p-5"
          />
        </div>
        <div className="sm:w-3/5 space-y-3 p-5 sm:py-5">
          <h1 className="text-3xl font-bold text-[#9538E2]">{product_title}</h1>
          <h2 className="text-xl font-bold">Author: {author}</h2>
          <h1 className="text-xl font-semibold text-gray-500">
            Price: ${price}
          </h1>
          <p>
            {availability === true ? (
              <button className="bg-green-200 py-1 px-4 rounded-full border border-green-500 text-green-600">
                In Stock
              </button>
            ) : (
              <button className="bg-orange-100 py-1 px-4 rounded-full border border-orange-500 text-orange-600">
                Out of Stock
              </button>
            )}
          </p>
          <h2>
            <b>Description:</b> {description}
          </h2>
          <h2>
            Number of Pages: <b>{pages}</b>{" "}
          </h2>
          <h3>
            Category: <b>{category}</b>
          </h3>
          <h3>
            Publisher: <b>{publisher}</b>
          </h3>
          <h3>
            Year of Publish: <b>{year_of_publish}</b>
          </h3>
          <div className="flex items-center text-orange-500">
            <h3 className="font-bold inline">
              {" "}
              <span className="text-black mr-2">Rating: </span>{" "}
            </h3>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <span className="ml-2 text-black">{rating}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handelAddToCart(product_id, availability)}
              className="bg-[#9538E2] py-2 px-5 rounded-full border text-white flex items-center gap-2"
            >
              <span>Add to Cart</span>{" "}
              <span>
                <FaShoppingCart />
              </span>
            </button>
            <button
              onClick={() => addToStoredFavouriteList(product_id)}
              id="wishlistBtn"
              className="text-xl bg-white p-2 rounded-full border border-gray-300 "
            >
              {" "}
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
