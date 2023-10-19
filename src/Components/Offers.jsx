import { useEffect, useState } from "react";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("/offers.json")
      .then((response) => response.json())
      .then((data) => setOffers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto mb-16 px-2">
      <h1 className="text-center text-4xl md:text-7xl italic font-semibold">
        Our Featured <span className="text-rose">Offers</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center mt-12">
        {offers.map((offer) => (
          <a key={offer.id} href="#" className="group relative block overflow-hidden">
          <button
            className="absolute end-4 top-4 z-10 rounded-full bg-base-200 p-1.5 text-gray-900 transition hover:text-gray-900/75"
          >
            <span className="sr-only">Wishlist</span>
        
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        
          <img
            src={offer.img}
            alt=""
            className="w-full transition duration-500 group-hover:scale-105 object-contain"
          />
        
          <div className="relative border border-base-200 bg-base-200 p-6">
            <span
              className="whitespace-nowrap bg-rose px-3 py-1.5 text-xs font-medium text-white"
            >
              On Sale
            </span>
        
            <h3 className="mt-4 text-lg font-medium text-gray-900">{offer.name}</h3>
            <p>{offer.details}</p>
        
            <p className="mt-1.5 text-sm text-gray-700"><s>${offer.price}</s> to ${offer.price-150}</p>
        
            <form className="mt-4">
              <button
                className="block w-full rounded bg-rose text-white p-4 text-sm font-medium transition hover:scale-105"
              >
                Add to Cart
              </button>
            </form>
          </div>
        </a>
        ))}
      </div>
    </div>
  );
};

export default Offers;
