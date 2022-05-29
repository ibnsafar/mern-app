import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Featured from "../components/featured/Featured";
import "./css/home/home.css";
import ListProperty from "../components/listProperty/ListProperty";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <>
            <div>
                <Navbar/>
                <Header/>
                <div className="homeContainer">
                    <Featured/>
                    <h1 className="homeTitle">Browser by property type</h1>
                    <ListProperty/>
                    <h1 className="homeTitle">Home guests love</h1>
                    <FeaturedProperties/>
                    <MailList/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default Home;