import Slider from "./Slider";

const Header = () => {
  const images = {
    img1: "/1.jpg",
    img2: "/2.jpg",
    img3: "/3.jpg",
  };
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <Slider images={images}></Slider>
    </div>
  );
};

export default Header;
