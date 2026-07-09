import scss from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={scss.hero}>
      <div className={scss.left}>
        <h1>Welcome To The Movie World!</h1>
        <button>Learn More</button>
      </div>
      <img
        src="https://s3-alpha.figma.com/hub/file/3271720301/85f5595b-9b58-45c2-a189-8354dfc6a3fe-cover.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
