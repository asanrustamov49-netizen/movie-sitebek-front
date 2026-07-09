import Hero from "@/components/widgets/hero/Hero";
import scss from "./home.module.scss";
import Products from "@/components/widgets/products/Products";

const Home = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.hero}>
            <Hero />
          </div>
          <div className={scss.products}>
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
