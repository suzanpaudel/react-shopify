import Navbar from './components/Navbar';
import MainHeader from './components/MainHeader';
import GridSection from './components/GridSection';
import NewArrival from './components/NewArrival';
import TrendingSection from './components/TrendingSection';
import LatestGallery from './components/LatestGallery';
import ClothGallery from './components/ClothGallery';
import Services from './components/Services';
import NewsLetter from './components/NewsLetter';
import BasicInfo from './components/BasicInfo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <GridSection />
      <NewArrival />
      <TrendingSection />
      <LatestGallery />
      <ClothGallery />
      <Services />
      <NewsLetter />
      <BasicInfo />
      <Footer />
    </div>
  );
}

export default App;
