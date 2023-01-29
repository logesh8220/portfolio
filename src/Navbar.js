import React, { useState } from 'react'
import './App.css';

function Navbar() {
    const [isActive,setActive]=useState(false)
    let slide =()=>{
        setActive(current=>!current)     
    } 
    

    return (

        <div  className={isActive?"sticky-top text-center sticky-top text-center ":"sticky-top text-center sticky-top text-center nav_div_1"} >
            <div className="container-fluid nav_div sticky-top " >
                <nav className="nav navbar p-3 nav_div" id="nav">
                    <div className="portfolio ">
                        <h1 className="port" style={{color:"black"}}>Port<span style={{color:"#6e07f3"}} className="folio">folio</span></h1>
                    </div>
                    <ul className="list-items text-center" id="simple-list-example" >
                        <li><a href="#simple-list-item-1"> <i className="bi bi-house me-2"></i>Home</a></li>
                        <li><a href="#simple-list-item-2"> <i className="bi bi-file-person me-2"></i>About</a></li>
                        <li><a href="#simple-list-item-3"> <i className="bi bi-award me-2"></i>Skills</a></li>
                        <li><a href="#simple-list-item-4"> <i className="bi bi-cast me-2"></i>Projects</a></li>
                        <li><a href="#simple-list-item-5"> <i className="bi bi-person-lines-fill me-2"></i>Contact</a></li>
                        <li><a className='resume' href="https://drive.google.com/file/d/1Xuwj6kd7znnRI88R0wJ8-xFwz-mvOE8F/view?usp=sharing" target="_blank" download="proposed_file_name"><i class="bi bi-file-earmark-arrow-down me-2"></i>Resume</a></li>
                    </ul>
                   
                <div className={ isActive?'humbargar11':'humbargar'} onClick={slide}  >
                    <div className={isActive?"humb11":"humb"}></div>
                    <div  className={isActive?"humb22":"humb"}></div>
                    <div  className={isActive?"humb33":"humb"}></div>
              
            </div>
                </nav>

            </div>
           
        </div>


    
  
    )

    }
export default Navbar