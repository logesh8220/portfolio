import React from 'react'
import { useAppContext } from './ContextForSwitchLanguage'

function Footer() {
    const { languageState} = useAppContext()
    return (
        <div>
            <div className="footer-head container text-light text-center">
                <h3 className="quotes">{languageState==="JP"?"動くようにする、正しくする、速くする。":"Make it work, make it right, make it fast."}</h3>
            </div>
            <div className="footer text-light text-center">
                <div className="text-center">
                    <a href="https://www.linkedin.com/in/logesh-thirumurugan-08b96722a/" rel="noreferrer" target="_blank"
                        style={{color: "white"}}><i className="fa-brands fa-linkedin-in fa-2x social-icon"></i></a>
                    <a href="https://github.com/logesh8220" rel="noreferrer" target="_blank" style={{color: "white"}}><i
                        className="fa-brands fa-github fa-2x social-icon "></i></a>
                    <a href="mailto:logeshthirumurugan@gmail.com" rel="noreferrer" target="_blank" style={{color: "white"}}><i
                        className="fa-brands fa-google fa-2x social-icon "></i></a>
                </div>
                <div>
                    <h6 className="text-light fw-bolder mt-3 made text-muted"
                        style={{fontFamily:"Montserrat Alternates, sans-serif", opacity: "40%"}}><i
                            className="fa-brands fa-bootstrap fa-1x mx-2"></i>Made With React</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer