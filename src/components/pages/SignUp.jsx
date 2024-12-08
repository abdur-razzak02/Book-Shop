import { useContext, useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    if (!formData.name || !formData.email || !formData.password) {
      setErrorMessage("All fields are required!");
      return;
    }
    console.log("Signup data:", formData);
    createUser(formData.email, formData.password)
        .then((result) => {
            setUser(result.user);
            navigate('/')
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
    setErrorMessage("");
  };

  const handleGoogleSignup = () => {
    // Add your Google signup logic here
    console.log("Google Signup");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-480px)] px-5 lg:px-0 my-10 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>

        <form className="mt-6" onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full input input-bordered"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full input input-bordered"
              placeholder="Email"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full input input-bordered"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-5 top-5 flex items-center text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              required
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full input input-bordered"
              placeholder="Photo URL"
            />
          </div>
          {errorMessage && (
            <div className="my-3 text-center text-red-600">{errorMessage}</div>
          )}
          <button type="submit" className="w-full btn btn-primary">
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center w-full btn btn-outline"
          >
            <FaGoogle className="mr-2" />
            Sign Up with Google
          </button>
        </div>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
