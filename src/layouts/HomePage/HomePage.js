import './homePage.css'
import BackgroundSlider from '../../components/Banner/BackgroundSlider';
import Services from '../../components/Services/Services';
import RowProducts from '../../components/RowProducts/RowProducts';

function HomePage() {
  return (
    <div className='container'>
      <BackgroundSlider/>
      <Services/>
      <RowProducts/>
    </div>
  );
}

export default HomePage;