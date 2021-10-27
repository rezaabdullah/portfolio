import * as React from "react"
import { Container,
    Hero,
    Section_title,
    Image_wrapper
} from "./ui/layout.module.scss"
import Navbar from "./navbar"
// import { StaticImage } from 'gatsby-plugin-image'
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
                    </div>
                    <div className={Image_wrapper}></div>
                </section>
            </main>
        </div>
    )
}

export default Layout