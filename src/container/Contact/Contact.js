import { Message } from '@mui/icons-material';
import React, { useState } from 'react';

function Contact(props) {

    const validEmail = RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    const validName = RegExp(
        "[a-zA-Z]+\\.?"
    )


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [subErr, setSubErr] = useState("")
    const [msgErr, setMsgErr] = useState("")

    const formValidation = () => {

        if (name === "") {
            setNameErr("Name is Require Feild.");
        } else {
            if (!validName.test(name)) {
                setNameErr("Wrounge Name Enter !!")
            } else {
                setNameErr("")
            }
        }

        if (email === "") {
            setEmailErr("Email Is Qequired Feild.")
        } else {
            if (!validEmail.test(email)) {
                setEmailErr("Wrounge E-mail Enter.")
            } else {
                setEmailErr("")
            }
        }


        if (message === "") {
            setMsgErr("Message is Required Feild.")
        } else {
            setMsgErr("")
        }

        if (subject === "") {
            setSubErr("Subject Is Required Feild.")
        } else {
            setSubErr("")
        }
    }

    return (
        <>

            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p> F-505, Inovative Plazza New Delhi, India</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>cityhospital@example.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 9988776655</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <form role="form" className="php-email-form">
                                <div className="row">

                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <p className='contect-errore'>{nameErr}</p>
                                    </div>

                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email" id="email"
                                            placeholder="Your Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <p className='contect-errore'>{emailErr}</p>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                    <p className='contect-errore'>{subErr}</p>

                                </div>

                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={5}
                                        placeholder="Message"
                                        required defaultValue={""}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <p className='contect-errore'>{msgErr}</p>

                                </div>

                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>

                                <div className="text-center"><button  onClick={formValidation} type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
