import Banner from "../../Components/Header/Banner/Banner"
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import NewsletterSub from "../../Components/NewsletterSub/NewsletterSub";
import OurLocation from "../../Components/OurLocation/OurLocation";
import SpecialOffer from "../../Components/SpecialOffer/SpecialOffer";
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <SpecialOffer></SpecialOffer>
           <OurLocation></OurLocation>
           <NewsletterSub></NewsletterSub>
           <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;