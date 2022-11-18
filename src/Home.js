import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Home() {


    return (
        <div id="simple-list-item-1">
            <div>

                <div style={{ height: "200px" }}>
                    <div className='humbargar'>
                        <div className="humb"></div>
                        <div className="humb"></div>
                        <div className="humb"></div>
                    </div>
                </div>
            </div>
            <div className="container text-center home scrollspy-example" data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" tabIndex="0">
                <div className="content justify-content-between" >
                    <div>
                        <span><h1 className="input">
                            <Typewriter
                             words={[" Hi There ","I Am Logesh ","Full Stack Web Developer"]}
                             loop
                             cursor
                             cursorStyle='_'
                             typeSpeed={70}
                             delaySpeed={1000}
                             deleteSpeed={50}
                           
                            />
                        </h1></span>
                    </div>
                    <h5 className="text-home">I Code and Design Beautifully simple things,I Love What I do.</h5>
                </div>
                <div className="my-5">
                    <img src="/img/pngegg2.png" className="h-img" alt='home' />
                </div>
                <div className="container scrollspy-example"id="simple-list-item-2" data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true"  tabIndex="0">
                    <img src="img/hero-devices.svg" className="img-res" alt='home' />
                </div>
            </div>
        </div>
    )
}

export default Home