import React from 'react'
import { useAppContext } from './ContextForSwitchLanguage';

function About() {
    const { languageState } = useAppContext()
    return (
        <div>
            <div className="container-fluid about-section text-center " >
                <div className="about-div-2" >
                    <div className="container text-light py-5 col-lg-5 col-md-8 col-sm-10 " >
                        <h2 className="my-5" style={{ fontFamily: "Cairo, sans-serif " }}>{languageState === "JP" ? "こんにちは、私はローゲシュです。はじめまして。" : "Hi,I'M logesh.Nice to meet you."}</h2>
                        <h5 className="about-text fw-bolder">
                            {languageState === "JP" ? "私は強力な対人スキルを持つ自発的な人です。Full-Stack[MERN] Developer Bootcamp @ Guvi, Chennaiを完了しました。私はMERNスタックを使用してフルスタックWebアプリケーションを開発する実践的な経験があります。私はWebアプリケーションの構築に情熱を注いでおり、ソフトウェア開発に関する新しいことを学ぶことに熱心です。" : "I am a self-starter with strong interpersonal skills. I completed Full-Stack[MERN] Developer Bootcamp @ Guvi,Chennai. I have hands-on experience in developing Full-Stack Web Application wtih MERN stack.I am passionate about building web Applications and eager to learn new things around software Development."}

                        </h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About