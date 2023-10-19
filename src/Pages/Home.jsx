import Brands from "../Components/Brands";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import Latest from "../Components/Latest";
import Rating from "../Components/Rating";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const { brands } = useContext(AuthContext);
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
