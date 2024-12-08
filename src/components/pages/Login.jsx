import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, setUser, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    setErrorMessage("");
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-480px)] px-5 lg:px-0 py-10">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex justify-end mb-4">
          <button className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </button>
        </div>
        {errorMessage && (
          <div className="mb-4 text-center text-red-600">{errorMessage}</div>
        )}
        <button onClick={handleLogin} className="btn btn-primary w-full mb-4">
          Login
        </button>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FaGoogle />
          Login with Google
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          New to here?
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
