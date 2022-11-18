import React from 'react'

function Project() {
    return (
        <div className=''>
            <div className="project-div text-light text-center scrollspy-example " id="simple-list-item-4" data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" tabIndex="0">
                <div className="p-5">
                    <h1 style={{ fontFamily: "Cairo, sans-serif" }}>My Startup Projects</h1>
                </div>
                <div className="py-5 col-lg-4 p-lg-5 col-md-10 col-sm-10 container">
                    <h5 className="about-text text-light fw-bolder">I've used hundreds of web and mobile apps in
                        different industries and verticals. Eventually, I decided
                        that it would be a fun challenge to try designing and building my own.</h5>
                </div>
            </div>
            <div className="container project-container text-light text-center"  >
                <div className="row justify-content-around my-5">
                    <div className=" project1  col-lg-4">
                        <img src="/img/urlshortner.png" className="card-img-top project-img" alt="urlshortner"/>
                            <div >
                                <p style={{ fontFamily: "Cairo, sans-serif" }}>This tool allows you to seamlessly track your audience with simple and easy-to-remember yet powerful links and provide your customers a unique tailored experience</p>
                                <div className='text-muted'>
                                <h6>Email:loganguvitest@gmail.com </h6>
                                <h6>pass:Dfsdfgsdfs34s</h6>
                                </div>
                                <a className='p-icon' href='https://633d244cce5a75000919bc88--imaginative-lokum-bba323.netlify.app/' rel="noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right me-5 p-5 project-icon"></i></a>
                                <a className='p-icon' href='https://github.com/logesh8220/url_shortner_react' rel="noreferrer" target="_blank"><i className="bi bi-github ms-5 p-5 project-icon"></i></a>
                            </div>
                    </div>
                    <div className=" project1  col-lg-4">
                        <img src="/img/shortener1.png" className="card-img-top" alt="urlshortner"/>
                            <div >
                                <p style={{ fontFamily: "Cairo, sans-serif" }}>This is IMDB clone its show the online movies and TV shows ratings and other details with in short span of time</p>
                                <a className='p-icon' href='https://633d244cce5a75000919bc88--imaginative-lokum-bba323.netlify.app/' rel="noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right me-5 p-5 project-icon"></i></a>
                                <a className='p-icon' href='https://github.com/logesh8220/url_shortner_react'><i className="bi bi-github ms-5 p-5 project-icon"></i></a>
                            </div>
                    </div>
                </div>
                <div className="row justify-content-around my-5">
                    <div className=" project1  col-lg-4">
                        <img src="/img/imdbclone.png" className="card-img-top project-img" alt="urlshortner"/>
                            <div >
                                <p style={{ fontFamily: "Cairo, sans-serif" }}>This is IMDB clone its show the online movies and TV shows ratings and other details with in short span of time with limited contents</p>
                                <a className='p-icon' href='https://heroic-kulfi-6e4aa1.netlify.app/' rel="noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right me-5 p-5 project-icon"></i></a>
                                <a className='p-icon' href='https://github.com/logesh8220/Movie-details-IMDb'><i className="bi bi-github ms-5 p-5 project-icon"></i></a>
                            </div>
                    </div>
                    <div className=" project1  col-lg-4">
                        <img src="/img/shortener1.png" className="card-img-top" alt="urlshortner"/>
                            <div >
                                <p style={{ fontFamily: "Cairo, sans-serif" }}>I've used hundreds of web and mobile apps in different industries and verticals</p>
                                <a className='p-icon' href='https://633d244cce5a75000919bc88--imaginative-lokum-bba323.netlify.app/' rel="noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right me-5 p-5 project-icon"></i></a>
                                <a className='p-icon' href='https://github.com/logesh8220/Movie-details-IMDb'><i className="bi bi-github ms-5 p-5 project-icon"></i></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project