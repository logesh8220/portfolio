import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { sendmail } from './Mailer'


function Contact() {
    const [issending, setloading] = useState(false)
    const formik = useFormik({
        initialValues: {
            Name: "",
            Email: "",
            Subject: "",
            Message: "",
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                setloading(true)
                let data = await axios.post(`${sendmail.api}/api/sendmail`, values)
                console.log(data)
                setloading(false)
                toast.success("Message sent", {
                    className: "tost-massage"
                })
                resetForm({ values: "" })
            } catch (error) {
                console.log(error)
            }
        }

    })

    return (

        <div>

            <div>
                <div className="Contact-info text-center text-light scrollspy-example " style={{ fontFamily: "Cairo, sans-serif" }} id="simple-list-item-5" data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" tabIndex="0">
                    <div>
                        <h1>Contact-Me</h1>
                    </div>
                    <div className='email-ph d-flex justify-content-center'>
                        <h4>logeshthirumurugan@gmail</h4>
                    </div>
                    <div className='email-ph d-flex justify-content-center'>
                        <h4>8220739131</h4>
                    </div>
                    <div className="my-5">
                        <a href="https://www.linkedin.com/in/logesh-thirumurugan-08b96722a/" rel="noreferrer" target="_blank"
                            style={{ color: "white" }}><i className="fa-brands fa-linkedin-in fa-2x social-icon"></i></a>
                        <a href="https://github.com/logesh8220" rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-2x social-icon "
                            style={{ color: "white" }}></i></a>
                        <a href="mailto:logeshthirumurugan@gmail.com" rel="noreferrer" target="_blank"><i
                            className="fa-brands fa-google fa-2x social-icon " style={{ color: "white" }}></i></a>

                    </div>
                </div>
                <div className="container contact-container text-light">
                    <form className="contacti-div text-center" onSubmit={formik.handleSubmit}>
                        <div action="" className="form-c">
                            <input placeholder="Your Name" type="string" name='Name' required onChange={formik.handleChange} value={formik.values.Name} />
                            <input placeholder="E-mail" type="email" name='Email' required onChange={formik.handleChange} value={formik.values.Email} />
                            <input placeholder="Subject" type="string" name='Subject' required onChange={formik.handleChange} value={formik.values.Subject} />

                        </div>
                        <textarea className="area" cols="30" rows="10" type="string" name="Message" placeholder="Your message" onChange={formik.handleChange} value={formik.values.Message}></textarea>
                        <div>
                            {
                                issending? <button type="submit" className="btn-send"><div class="spinner-border ms-auto" role="status" aria-hidden="true"></div></button>:
                            <button type="submit" className="btn-send">Send <i className="bi bi-send"></i></button>
                            }


                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}

export default Contact