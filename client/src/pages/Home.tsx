import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Featured from "../components/featured/Featured";
import "./css/home/home.css";

const Home = () => {
    return (
        <>
            <div>
                <Navbar/>
                <Header/>
                <div className="homeContainer">
                    <Featured/>
                    <h1 className="homeTitle">Browser by property type</h1>
                </div>
            </div>
        </>
    )
}
export default Home;