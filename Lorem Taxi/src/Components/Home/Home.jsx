import taxiImg from '../img/slider-img.png'

const Home = () => {
    return (
        <div className="home">
            <div className="box">
                <div className="detail-box">
                    <h3>Welcome to</h3>
                    <h2>LoremTaxi</h2>
                </div>
                <img src={taxiImg} alt="taxi-img" />
                <button className="home-btn">Read More</button>
            </div>

            <div className="get-taxi">
                <h4>Get A Taxi Now</h4>
                <form action="/">
                    <input type="text" placeholder="Car Type" />
                    <input type="text" placeholder="Pick Up Location" />
                    <input type="text" placeholder="Drop Location" />
                    <div className="btn-input">
                        <input type="text" placeholder="Your Phone Number" />
                        <button>Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;