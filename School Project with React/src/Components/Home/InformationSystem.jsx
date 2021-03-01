import Logo from '../img/school.jpg'

const InformationSystem = () => {
    return (
        <div className="information-system">
            <img src={Logo} alt="Logo" />
            <div class="paragraphs-div">
                <h2>Welcome to School Management</h2>
                <h2>Website and Information System</h2>
                <p> School Management System is a complete school Management software designed to automate a school's diverse operations.</p>
            </div>
        </div>
    );
}

export default InformationSystem;