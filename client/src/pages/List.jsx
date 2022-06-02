import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import "./css/List/list.css";

const List = () => {
    return (
        <>
            <Navbar/>
            <Header type={"list"}/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label htmlFor="">Destination</label>
                            <input type="text"/>
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Check-in Date</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="listResult">

                    </div>
                </div>
            </div>
        </>
    )
}
export default List;