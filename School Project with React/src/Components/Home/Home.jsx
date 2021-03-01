import WelcomeToSchool from "./WelcomeToSchool"
import InformationSystem from "./InformationSystem"

const Home = () => {
    return (
        <div className="home">
            <InformationSystem />
            <WelcomeToSchool />
        </div>
    );
}

export default Home;