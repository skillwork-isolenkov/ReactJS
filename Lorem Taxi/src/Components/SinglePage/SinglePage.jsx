import About from "../About/About"
import Home from "../Home/Home";
import Services from "../Services/Services";
import News from "../News/News";
import Client from "../Client/Client";
import Contact from "../Contact Us/Contact";

const SinglePage = () => {
    return (
        <div className="single-page">
            <Home />
            <About />
            <Services />
            <News />
            <Client />
            <Contact />
        </div>
    );
}

export default SinglePage;