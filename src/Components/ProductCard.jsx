/* eslint-disable react/prop-types */

const ProductCard = ({product}) => {
    const { name, brand, price, details, rating, photo, category } = product;
    return (
        <div>
          <div className="card lg:card-side bg-base-200 shadow-xl">
  <figure><img src={photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="font-semibold">{brand.toUpperCase()}</p>
    <p>Category: {category.toUpperCase()}</p>
    <p>Price: ${price.toUpperCase()}</p>
    <div className="card-actions">
      <button className="btn bg-rose text-white">Edit</button>
      <button className="btn bg-rose text-white">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;