import LatestSchoolNews from "./Welcome/LatestSchoolNews"
import ManagementSystem from "./Welcome/ManagementSystem"

const WelcomeToSchool = () => {
    return (
        <div className="welcome-to-school">
            <ManagementSystem />
            <LatestSchoolNews />
        </div>
    );
}

export default WelcomeToSchool;