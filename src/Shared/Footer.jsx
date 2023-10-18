import {
    FaFacebook,
    FaInstagram,
    FaTwitch,
    FaTwitter,
  } from "react-icons/fa";
  const Footer = () => {
    return (
      <div className="bg-base-200">
        <footer className="footer p-10 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-start">
          <aside className="flex items-center gap-2">
            <img className="w-14" src="/logo.png" alt="" />
            <p className="text-2xl lg:text-4xl ">
              Techno{" "}
              <span className="font-semibold text-rose">
                City
              </span>
              <br />
              Providing reliable Products Since 2005
            </p>
          </aside>
          <nav className="flex flex-col items-center">
            <header className="text-2xl lg:text-4xl mb-1 lg:mb-5">
              Social{" "}
              <span className="font-semibold text-rose">
                Links
              </span>
            </header>
            <div className="grid grid-flow-col gap-4 text-3xl text-rose">
              <a>
                <FaFacebook></FaFacebook>
              </a>
              <a>
                <FaTwitter></FaTwitter>
              </a>
              <a>
                <FaTwitch></FaTwitch>
              </a>
              <a>
                <FaInstagram></FaInstagram>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  