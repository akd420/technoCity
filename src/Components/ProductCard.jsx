/* eslint-disable react/prop-types */

import { Rating, RoundedStar } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#F02757',
    inactiveFillColor: '#fecdd3'
  }

const ProductCard = ({ product }) => {
    const { _id,name, brand, price, rating, photo, category } = product;
    const rate = parseInt(rating);

    
  return (
    <div>
      <div className="card lg:card-side bg-base-200 shadow-xl">
        <figure>
          <img className="max-w-[160px] max-h-[212px]" src={photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold">{brand.toUpperCase()}</p>
          <p>Category: {category.toUpperCase()}</p>
          <p>Price: ${price.toUpperCase()}</p>
          <Rating style={{ maxWidth: 150 }} value={rate} itemStyles={myStyles}></Rating>
          <div className="card-actions">
            <button className="btn bg-rose text-white">Edit</button>
            <Link to={`/brands/${brand}/${_id}`}><button className="btn bg-rose text-white">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
