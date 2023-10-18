import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { useContext } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { googleLogin, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast("Login Successful", {
          icon: "✅",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        toast(error.message, {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast("Login Successful", {
          icon: "✅",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        toast(error.message, {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Welcome Back
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email....."
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password....."
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p className="label-text-alt mt-3 text-xl">
                    Do not have an account?{" "}
                    <Link to={"/register"}>
                      <span className="font-semibold text-rose">
                        Sign up
                      </span>
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6 space-y-5">
                <button className="btn bg-rose text-white">
                  Login
                </button>
                <p className="text-center">Or</p>
              </div>
            </form>
            <div className="flex items-center justify-center mb-5 px-8">
              <button
                onClick={handleGoogleLogin}
                className="btn w-full bg-rose text-white"
              >
                <BiLogoGoogle></BiLogoGoogle>Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
