import * as React from "react"
import { Container,
    Hero,
    Section_title,
    Image_wrapper
} from "./ui/layout.module.scss"
import Navbar from "./navbar"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={Container}>
            <Navbar/>
            <main>
                <section id={Hero}>
                    <div className={Section_title}>
                        <h1>{pageTitle}</h1>
                        {/* <h2>This is a random text</h2> */}
                    </div>
                    <div className={Image_wrapper}>
                        <h1>{pageTitle}</h1>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Layout