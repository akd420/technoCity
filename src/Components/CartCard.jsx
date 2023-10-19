/* eslint-disable react/prop-types */

import { Rating, RoundedStar } from "@smastrom/react-rating";
import toast from "react-hot-toast";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#F02757",
  inactiveFillColor: "#fecdd3",
};

const CartCard = ({ product }) => {
  const { _id, name, brand, price, rating, photo, category } = product;
  const rate = parseInt(rating);

  const handleDelete = () => {
    fetch(`http://localhost:5000/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Product Deleted", {
            icon: "✅",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
  }

  return (
    <div>
      <div className="card lg:card-side bg-base-200 shadow-xl">
        <figure>
          <img
            className="max-w-[160px] max-h-[212px]"
            src={photo}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold">{brand.toUpperCase()}</p>
          <p>Category: {category.toUpperCase()}</p>
          <p>Price: ${price.toUpperCase()}</p>
          <Rating
            style={{ maxWidth: 150 }}
            value={rate}
            itemStyles={myStyles}
          ></Rating>
          <div className="card-actions">
            <button onClick={handleDelete} className="btn bg-rose text-white mt-2">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
