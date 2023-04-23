import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-100 flex justify-center items-center flex-col">
      <nav className="w-full flex justify-center items-center mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open();
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>
    </header>
  );
};

export default Hero;
