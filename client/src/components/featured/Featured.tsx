import "./../css/featured/featured.css";

const Featured = () => {
    return (
        <>
            <div className="featured">
                <div className="featuredItem">
                    <img className={"featuredImg"}
                        src="https://a.cdn-hotels.com/gdcs/production24/d796/6921fa10-f585-11e8-b7e0-0242ac110002.jpg"
                         alt=""/>
                    <div className="featuredTitles">
                        <h1>Dublin</h1>
                        <h2>123 properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className={"featuredImg"}
                        src="https://a.cdn-hotels.com/gdcs/production24/d796/6921fa10-f585-11e8-b7e0-0242ac110002.jpg"
                         alt=""/>
                    <div className="featuredTitles">
                        <h1>Dublin</h1>
                        <h2>123 properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className={"featuredImg"}
                        src="https://a.cdn-hotels.com/gdcs/production24/d796/6921fa10-f585-11e8-b7e0-0242ac110002.jpg"
                         alt=""/>
                    <div className="featuredTitles">
                        <h1>Dublin</h1>
                        <h2>123 properties</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Featured;