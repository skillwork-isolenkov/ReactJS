const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <div className="container">
                <label for="name"><b>Your Name:</b></label>
                <input type="text" name="name" id="name" required />

                <label for="email"><b>Your E-mail:</b></label>
                <input type="email" name="email" id="email" required />

                <label className="text-area" for="textarea">Your Message:</label>
                <textarea className="textarea" name="textarea" rows="7" cols="50"></textarea>

                <button type="submit" className="sendemail">Send E-mail</button>
            </div>
            <span className="contact-span"></span>
        </div>
    );
}

export default Contact;