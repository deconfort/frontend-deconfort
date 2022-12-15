import "./homePage.css";
import Services from "../../components/Services/Services";
import RowProducts from "../../components/RowProducts/RowProducts";
import ButtonSeeAll from "../../components/ButtonSeeAll/ButtonSeeAll";


function HomePage() {
  return (
    <div className="main-home-page">
      <div className="container-homepage">
        <Services />
        <RowProducts />
        <ButtonSeeAll />
      </div>
    </div>
  );
}

export default HomePage;