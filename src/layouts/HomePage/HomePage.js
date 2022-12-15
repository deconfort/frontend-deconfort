import "./homePage.css";
import BackgroundSlider from "../../components/Banner/BackgroundSlider";
import Services from "../../components/Services/Services";
import RowProducts from "../../components/RowProducts/RowProducts";
import ButtonSeeAll from "../../components/ButtonSeeAll/ButtonSeeAll";
import TextCarousel from "../../components/TextCarousel/TextCarousel";
// import ShopProducts from '../../components/ShopProducts/ShopProducts';
// import FilterProducts from '../../components/FilterProducts/FilterProducts';
// import AllProducts from '../../components/AllProducts/AllProducts';

function HomePage() {
  return (
    <div className="main-home-page">
        {/* <BackgroundSlider /> */}
      <div className="container-homepage">
        {/* <BackgroundSlider /> */}
        <Services />
        <RowProducts />
        <ButtonSeeAll />
        {/* <TextCarousel /> */}
        {/* <ShopProducts/> */}
        {/* <FilterProducts/> */}
        {/* <AllProducts/> */}
      </div>
    </div>
  );
}

export default HomePage;