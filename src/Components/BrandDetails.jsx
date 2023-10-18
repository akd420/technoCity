import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const BrandDetails = () => {
    const [details,setDetails] = useState(null);
    const {brand} = useParams();
    const name = brand;
    const brands = useLoaderData();
    useEffect(()=>{
        const findBrand = brands?.find(brand=>brand.name === name);
        setDetails(findBrand);
    },[])
    return (
        <div>
            Brand details
        </div>
    );
};

export default BrandDetails;