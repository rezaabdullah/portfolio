import * as React from "react"
import { Container,
    Hero,
    Section_title,
    Image_wrapper,
    social_media
} from "./ui/layout.module.scss"
import Navbar from "./navbar"
import { StaticImage } from 'gatsby-plugin-image'
import Typewriter from "typewriter-effect";

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={Container}>
            <Navbar/>
            <main>
                <section id={Hero}>
                    <div className={Section_title}>
                        <h1>Hi, I'm Abdullah Reza</h1>
                        <h2>
                            <Typewriter
                                options={{
                                    strings: ["Product Manager", "Data Scientist", "Mech. Engineer", "Philomath"],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </h2>
                        {children}
                        <div className={social_media}>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/airreza/"><StaticImage src="../images/linkedin.png" alt="LinkedIn" height="32"/></a></li>
                                <li><a href="https://medium.com/@abdullahreza"><StaticImage src="../images/medium.png" alt="Medium" height="32"/></a></li>
                                <li><a href="https://github.com/rezaabdullah"><StaticImage src="../images/logo_github.png" alt="Github" height="32"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={Image_wrapper}></div>
                </section>
            </main>
        </div>
    )
}

export default Layout