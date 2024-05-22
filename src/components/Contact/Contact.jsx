import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const [result, setResult] = React.useState("Submit now");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "41efa58b-54f9-4a11-b7b5-f7837096904a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            showAlert(data.message, 'success');
            setResult("Submit now");
        } else {
            showAlert("Error: " + data.message, 'error');
            setResult("Submit now");
        }
    };

    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1><a id='connect'>Get in touch</a></h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Feel free to reach out to me with any questions, inquiries, or
                        collaboration opportunities. I'm here to work with you.</p>
                    <div className="contact-details">
                        <hr />
                        <div className="contact-detail">
                            <a href="mailto:brian01kimathi@gmail.com" target='_blank' style={{ textDecoration: 'none' }}>
                                <img src={mail_icon} alt="" /><p>brian01kimathi@gmail.com</p>
                            </a>
                        </div>
                        <div className="contact-detail">
                            <a href="tel:+254743208307" target='_blank' style={{ textDecoration: 'none' }}>
                                <img src={call_icon} alt="" /> <p>+254 743208307</p>
                            </a>
                        </div>
                        <div className="contact-detail">
                            <a href="https://www.google.com/maps/dir//-1.350936,36.6414692/@-1.350757,36.6413592,20z?entry=ttu" target='_blank' style={{ textDecoration: 'none' }}>
                                <img src={location_icon} alt="" /> <p>Ngong, Kenya</p>
                            </a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} method='post' className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your Name' name='name' required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your Email' name='email' required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" placeholder='Enter Your message' rows="10" required></textarea>
                    <button className="contact-submit" type='submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
