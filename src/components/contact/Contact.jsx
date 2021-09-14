import React, { useState } from 'react'
import "./contact.scss";

const Contact = () => {

    const [message,setMessage] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();

        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assest/contact.svg" alt="contact" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll Reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
