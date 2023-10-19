import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Slider from "../Components/Slider";
import ProductCard from "../Components/ProductCard";

const BrandDetails = () => {
  const loadedBrands = useLoaderData();
  const [image, setImage] = useState([]);
  const { id } = useParams();
  const { brands } = useContext(AuthContext);
  useEffect(() => {
    const findBrand = brands?.find((brand) => brand.name.toLowerCase() == id);
    setImage(findBrand);
  }, [brands, id]);
  const { img1, img2, img3 } = image;
  const images = {
    img1,
    img2,
    img3,
  };
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="my-12">
        <Slider images={images}></Slider>
      </div>
      {!loadedBrands.length > 0 ? (
        <div className="card-body text-center lg:text-left flex flex-col justify-center items-center gap-6 mb-12">
          <h2 className=" text-rose text-8xl font-bold">Oops!</h2>
          <p className="text-3xl font-semibold mt-5">No products added yet.</p>
          <p className="text-2xl">
            Add some{" "}
            <span className="text-rose">
              <Link to={"/add"}>Products</Link>
            </span>
          </p>
          <div className="card-actions flex justify-center lg:justify-start">
            <Link to={"/"}>
              <button className="btn bg-rose text-white">Back to Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-4xl md:text-7xl italic font-semibold">
            Available <span className="text-rose">Products</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center px-4 my-12">
            {loadedBrands.map((product) => (
              <ProductCard product={product} key={product._id}></ProductCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandDetails;
