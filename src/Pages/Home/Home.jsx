import Banner from "../../Components/Header/Banner/Banner"
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import OurLocation from "../../Components/OurLocation/OurLocation";
import SpecialOffer from "../../Components/SpecialOffer/SpecialOffer";
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <SpecialOffer></SpecialOffer>
           <OurLocation></OurLocation>
           <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;