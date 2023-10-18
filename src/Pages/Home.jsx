
import { useLoaderData } from "react-router-dom";
import Brands from "../Components/Brands";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import Latest from "../Components/Latest";
import Rating from "../Components/Rating";



const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Brands brands={brands}></Brands>
            <Offers></Offers>
            <Rating></Rating>
            <Latest></Latest>
        </div>
    );
};

export default Home;