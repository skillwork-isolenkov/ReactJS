import logo1 from '../../img/latest school news.jpg'
import logo2 from '../../img/latest teacher news.jpg'
import logo3 from '../../img/latest result news.jpg'

const LatestSchoolNews = () => {
    return (
        <div className="latest-school-news">
            <h3>Latest School News</h3>
            <div className="latest-school-news-div">
                <img src={logo1} alt="Logo1" />
                <div>
                    <h4>OCT 29, 2019</h4>
                    <span>Latest School News</span>
                    <p>
                        This school software has a powerful online
                        community to bring parents, teachers and students
                        on a common interactive platform.
                        </p>
                </div>
            </div>

            <div className="latest-teacher-news-div">
                <img src={logo2} alt="Logo2" />
                <div>
                    <h4>OCT 28, 2024</h4>
                    <span>Latest Teacher News</span>
                    <p>
                        This school software has a powerful online
                        community to bring parents, teachers and students
                        on a common interactive platform.
                        </p>
                </div>
            </div>

            <div className="latest-result-news-div">
                <img src={logo3} alt="Logo3" />
                <div>
                    <h4>DEC 25, 2062</h4>
                    <span>Latest Result News</span>
                    <p>
                        This school software has a powerful online
                        community to bring parents, teachers and students
                        on a common interactive platform.
                        </p>
                </div>
            </div>
        </div>
    );
}

export default LatestSchoolNews;