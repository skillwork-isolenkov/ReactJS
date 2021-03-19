import { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        let container = document.querySelector('.container');
        let contactSpan = document.querySelector('.contact-span');

        let name = document.querySelector('#name');
        let email = document.querySelector('#email');
        let textarea = document.querySelector('.textarea');

        if (name.value !== '' && email.value !== '' && textarea.value !== '') {
            container.style.display = 'none'
            contactSpan.style.marginBottom = '12%';
            contactSpan.style.color = "green";

            setMessage('We got your message. We will contact you shortly!');
        } else {
            contactSpan.style.color = "#cf1717";
            setMessage('Please provide your name, e-mail and your message!');
        }
    }

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

                <button onClick={sendMessage} type="submit" className="sendemail">Send E-mail</button>
            </div>
            <span className="contact-span">{message}</span>
        </div>
    );
}

export default Contact;