import "./homePage.css";
import Services from "../../components/Services/Services";
import RowProducts from "../../components/RowProducts/RowProducts";
import RowProducts2 from "../../components/RowProducts2/RowProducts2";
import RowProducts3 from "../../components/RowProducts3/RowProducts3";
import ButtonSeeAll from "../../components/ButtonSeeAll/ButtonSeeAll";
import Footer4Header from '../../components/Footer4Header/Footer4Header'


function HomePage() {
  return (
    <div className="main-home-page">
      <div className="background-home"></div>
      <div className="container-homepage">
        <Footer4Header />
        <div className="container-home-main">
          <Services />
          <RowProducts />
          <RowProducts2 />
          <RowProducts3 />
          <ButtonSeeAll />
        </div>
      </div>
    </div>
  );
}

export default HomePage;