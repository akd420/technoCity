/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brands = ({brands}) => {
    return (
        <div className="max-w-screen-xl mx-auto my-16">
            <h1 className="text-center text-4xl md:text-7xl italic font-semibold">Check out our <span className="text-rose">Brands</span></h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center mt-12">
                    {brands.map((brand) => (
                        <div key={brand.id}>
                        <Link to={`/brands/${brand.name.toLowerCase()}`}><div key={brand.id} className=" rounded-lg border border-base-200 bg-base-200 p-6">
                            <img src={brand.logo} alt={brand.name} className="h-20 w-52 mx-auto" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-center">{brand.name}</h2>
                            </div>
                        </div></Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center mt-6">
            <button className="btn bg-rose text-white" title="placeholder">See All</button>
            </div>
        </div>
    );
};

export default Brands;