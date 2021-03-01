import logo from '../img/school.jpg'
import logo1 from '../img/latest school news.jpg'
import logo2 from '../img/latest teacher news.jpg'
import logo3 from '../img/1.jpg'
import logo4 from '../img/2.jpg'
import logo5 from '../img/3.jpg'
import logo6 from '../img/4.jpg'
import logo7 from '../img/5.jpg'
import logo8 from '../img/6.jpg'

const Gallery = () => {
    return (
        <div className="gallery">
            <div>
                <img src={logo} alt="Logo" />
                <img src={logo1} alt="Logo1" />
                <img src={logo2} alt="Logo2" />
            </div>
            <div>
                <img src={logo3} alt="Logo3" />
                <img src={logo4} alt="Logo4" />
                <img src={logo5} alt="Logo5" />
            </div>
            <div>
                <img src={logo6} alt="Logo6" />
                <img src={logo7} alt="Logo7" />
                <img src={logo8} alt="Logo8" />
            </div>
        </div>
    );
}

export default Gallery;