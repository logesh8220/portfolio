import React from 'react'
import reactIMG from './IMG/react.png'
import nodeIMG from './IMG/node.png'
import mongoIMG from './IMG/mongo.png'
import bootIMG from './IMG/boot.png'
import { useAppContext } from './ContextForSwitchLanguage'
function Project() {
    const { languageState } = useAppContext()
    return (
        <div className=''>
            <div className="project-div text-light text-center scrollspy-example " id="simple-list-item-4" data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" tabIndex="0">
                <div className="p-5">
                    <h1 style={{ fontFamily: "Cairo, sans-serif" }}>{languageState==="JP"?"私のプロジェクト":"My Startup Projects"}</h1>
                </div>
                <div className="py-5 col-lg-4 p-lg-5 col-md-10 col-sm-10 container">
                    <h5 className="about-text text-light fw-bolder">{languageState === "JP" ? `私はさまざまな業界や業種で何百ものWebアプリとモバイルアプリを使用してきました。結局、私は決めました
 自分で設計して構築してみるのも楽しい挑戦だろうと。`: `I've used hundreds of web and mobile apps in
                        different industries and verticals. Eventually, I decided
                        that it would be a fun challenge to try designing and building my own.`}</h5>
                </div>
            </div>
            <div className="container project-container text-light text-center"  >
                <div className="row justify-content-around my-5">
                    <div className=" project1  col-lg-4">
                        <img src="/img/zen.png" className="card-img-top project-img" alt="urlshortner" />
                        <div className='project-img'>
                            <img className='col-2' src={reactIMG}></img>
                            <img className='col-2' src={nodeIMG}></img>
                            <img className='col-2' src={mongoIMG}></img>
                            <img className='col-2' src={bootIMG}></img>
                        </div>
                        <div >
                            <p style={{ fontFamily: "Cairo, sans-serif" }}>{languageState === "JP" ? `ブートストラップv5で構築されています。実装された役割ベースのアクセス権例:(メンター、学生)各ユーザーには独自の機能と制限されたアクセスがあります。アプリにはCRUDも含まれています クラスを更新してクラスを作成できます。` : `Built with Bootstrap v5. Implemented Role Based Access Rights eg : (Mentor, Student) each user have their own features and limited access. Can.
                                App also includes CRUD You Can Update Classes and Create Classes .`}</p>
                            <a className='p-icon' href='https://zenclass-dashboard-clone-batch37.netlify.app' rel="noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right me-4 p-4 project-icon"></i></a>
                            <a className='p-icon' href='https://github.com/logesh8220/zen-class-dashbord' rel="noreferrer" target="_blank"><i className="bi bi-github ms-4 p-4 project-icon"></i></a>
                        </div>
                    </div>
                    <div className=" project1  col-lg-4">
                        <img src="/img/youtubedownloder.png" className="card-img-top project-img" alt="youtubedownloader" />
                        <div className='project-img'>
                            <img className='col-2' src={reactIMG}></img>
                            <img className='col-2' src={nodeIMG}></img>
                            <img className='col-2' src={mongoIMG}></img>
                            <img className='col-2' src={bootIMG}></img>
                        </div>
                        <div >
                            <p style={{ fontFamily: "Cairo, sans-serif" }}>{languageState === "JP" ? `My YouTubeビデオダウンローダーを使用すると、ビデオを選択して無料でダウンロードできます。MP4、MP3、SQ、HD、フルHD品質、およびその他の形式で高品質のビデオを取得できます。当社のソフトウェアはPCとモバイルの両方で動作するため、どこにいても使用できます。` : `With My YouTube video downloader, you can select videos and download them free of charge! You can get high-quality videos in MP4, MP3, SQ, HD, Full HD quality, and other formats. Our software works both on PC and mobile, allowing you to use it anywhere you are!`}</p>
                            <a className='p-icon' href='https://master--cozy-twilight-74a3ef.netlify.app/' rel="noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right me-4 p-4 project-icon"></i></a>
                            <a className='p-icon' href='https://github.com/logesh8220/youtube-video-downloader-react' rel="noreferrer" target="_blank"><i className="bi bi-github ms-4 p-4 project-icon"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around my-5">
                    <div className=" project1  col-lg-4">
                        <img src="/img/realmestore.png" className="card-img-top project-img" alt="urlshortner" />
                        <div className='project-img'>
                            <img className='col-2' src={reactIMG}></img>
                            <img className='col-2' src={nodeIMG}></img>
                            <img className='col-2' src={mongoIMG}></img>
                            <img className='col-2' src={bootIMG}></img>
                        </div>
                        <div >
                            <p style={{ fontFamily: "Cairo, sans-serif" }}>{languageState === "JP" ? `ブートストラップv5で構築されています。管理ポータルを実装し、統合されたRAZORPAY支払い統合を実装して、カートから注文します。すべての製品はアプリの管理ポータルで作成されます` : `Built with Bootstrap v5. Implemented ADMIN portal and integrated RAZORPAY payment Integration to make order from cart. All Products are created in Admin Portal of App `}</p>
                            <a className='p-icon' href='https://neon-otter-16f6a4.netlify.app/' rel="noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right me-4 p-4 project-icon"></i></a>
                            <a className='p-icon' href='https://github.com/logesh8220/Realme-store' rel="noreferrer" target="_blank"><i className="bi bi-github ms-4 p-4 project-icon"></i></a>
                        </div>
                    </div>
                    <div className=" project1  col-lg-4">
                        <img src="/img/crm.png" className="card-img-top project-img" alt="urlshortner" />
                        <div className='project-img'>
                            <img className='col-2' src={reactIMG}></img>
                            <img className='col-2' src={nodeIMG}></img>
                            <img className='col-2' src={mongoIMG}></img>
                            <img className='col-2' src={bootIMG}></img>
                        </div>
                        <div >
                            <p style={{ fontFamily: "Cairo, sans-serif" }}>{languageState === "JP" ? `ブートストラップv5で構築されています。ロールベースのアクセス(管理者、従業員、顧客)を実装しました。各ユーザーには独自の機能と制限付きアクセスがあります。アプリには製品 CRUD も含まれています` : ` Built with Bootstrap v5. Implemented Role Based Access (ADMIN, Employee and Customers). each user have their own features and limited access. Can. App also includes Product CRUD`} </p>
                            <a className='p-icon' href='https://funny-sprite-477a4b.netlify.app/' rel="noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right me-4 p-4 project-icon"></i></a>
                            <a className='p-icon' href='https://github.com/logesh8220/WebCode-2-CRM' rel="noreferrer" target="_blank"><i className="bi bi-github ms-4 p-4 project-icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project