import React, { useState } from 'react'
import './App.css';
import { useAppContext } from './ContextForSwitchLanguage';

function Navbar() {
    const [isActive, setActive] = useState(false)
    let slide = () => {
        setActive(current => !current)
    }
    const { languageState, setLangaugeState } = useAppContext()



    return (

        <div className={isActive ? "sticky-top text-center sticky-top text-center " : "sticky-top text-center sticky-top text-center nav_div_1"} >
            <div className="container-fluid nav_div sticky-top " >
                <nav className="nav navbar p-3 nav_div" id="nav">
                    <div className="portfolio ">
                        <h1 className="port" style={{ color: "black" }}>Port<span style={{ color: "#6e07f3" }} className="folio">folio</span>
                        </h1>
                    </div>
                    <ul className="list-items text-center" id="simple-list-example" >
                        <li><a href="#simple-list-item-1"> <i className="bi bi-house me-2"></i>{languageState === "JP" ? "ホーム" : "Home"}</a></li>
                        <li><a href="#simple-list-item-2"> <i className="bi bi-file-person me-2"></i>{languageState === "JP" ? "について" : "About"}</a></li>
                        <li><a href="#simple-list-item-3"> <i className="bi bi-award me-2"></i>{languageState === "JP" ? "スキル" : "Skills"}</a></li>
                        <li><a href="#simple-list-item-4"> <i className="bi bi-cast me-2"></i>{languageState === "JP" ? "プロジェクト" : "Projects"}</a></li>
                        <li><a href="#simple-list-item-5"> <i className="bi bi-person-lines-fill me-2"></i>{languageState === "JP" ? "連絡" : "Contact"}</a></li>
                        <li><a className='resume' rel="noreferrer" href="https://drive.google.com/file/d/1mSp2q-FecCS8adJDsOUWQYdm-HlPOfYe/view?usp=share_link" target="_blank" download="proposed_file_name"><i class="bi bi-file-earmark-arrow-down me-2"></i>{languageState === "JP" ? "履歴書" : "Resume"}</a></li>
                        <li className=" list-item-tr me-2" onClick={() => languageState === "JP" ? setLangaugeState("EN") : setLangaugeState("JP")}>{languageState === "EN" ? "日本語" : "ENGLISH"}</li>
                    </ul>

                    <div className={isActive ? 'humbargar11' : 'humbargar'} onClick={slide}  >
                        <div className={isActive ? "humb11" : "humb"}></div>
                        <div className={isActive ? "humb22" : "humb"}></div>
                        <div className={isActive ? "humb33" : "humb"}></div>

                    </div>
                </nav>

            </div>

        </div>




    )

}
export default Navbar