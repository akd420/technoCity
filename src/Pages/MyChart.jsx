import { Link, useLoaderData } from "react-router-dom";
import CartCard from "../Components/CartCard";

const MyCart = () => {
  const loadedCart = useLoaderData();
  console.log(loadedCart);
  return(
    <div className="max-w-screen-xl mx-auto">
        {!loadedCart.length > 0 ? (
        <div className="card-body text-center lg:text-left flex flex-col justify-center items-center gap-6 my-16 lg:my-24">
          <h2 className=" text-rose text-8xl font-bold">Oops!</h2>
          <p className="text-3xl font-semibold mt-5">No products added to cart yet.</p>
          <div className="card-actions flex justify-center lg:justify-start">
            <Link to={"/"}>
              <button className="btn bg-rose text-white">Back to Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center mt-12 text-4xl md:text-7xl italic font-semibold">
        Your <span className="text-rose">Cart</span>
      </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center px-4 my-12">
          {loadedCart.map((product) => (
            <CartCard
            product={product}
              key={product._id}
            ></CartCard>
          ))}
        </div>
        </div>
      )}
    </div>
  )
};

export default MyCart;
