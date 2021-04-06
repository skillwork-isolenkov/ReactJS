import taxiImg from '../img/about-img.png'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-heading">
                <h2>
                    Any Problems
                    <br />
                    Any Questions
                </h2>
            </div>
            <div className="contact-container">
                <div className="contact-box">
                    <h4>Get In touch</h4>
                    <form action="/">
                        <input type="text" placeholder="Name" />
                        <input type="number" placeholder="Phone Number" />
                        <input type="text" placeholder="Message" id="input-msg" />
                        <button>Send</button>
                    </form>
                </div>
                <img src={taxiImg} alt="taxi-img" />
            </div>
        </div>
    );
}

export default Contact;