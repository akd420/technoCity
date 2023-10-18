import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const NotFound = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center">
        <div className="card lg:card-side bg-base-100">
          <figure>
            <img src="/404.png" alt="Album" />
          </figure>
          <div className="card-body text-center lg:text-left">
            <h2 className=" text-rose text-8xl font-bold">Oops!</h2>
            <p className="text-3xl font-semibold mt-5">That Links Is Broken.</p>
            <p>
              Page does not exist or some other error occured. Go to our{" "}
              <span className="text-rose">
                <Link to={"/"}>Home page</Link>
              </span>
            </p>
            <div className="card-actions flex justify-center lg:justify-start">
              <Link to={"/"}>
                <button className="btn bg-rose text-white">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
