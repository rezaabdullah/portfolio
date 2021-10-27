import * as React from "react"
// import { Container,
//     Nav_wrapper,
//     logo_wrapper,
//     Nav_wrapper__ul,
//     Hero
// } from "./ui/layout.module.scss"
import { Container,
    Hero
} from "./ui/layout.module.scss"
import Navbar from "./navbar"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={Container}>
            {/* <nav className={Nav_wrapper}>
                <div className={logo_wrapper}>
                    A|R
                </div>
                <ul className={Nav_wrapper__ul}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Blogs</a></li>
                </ul>
            </nav> */}
            <Navbar/>
            <main>
                <section id={Hero}>
                    <h1>{pageTitle}</h1>
                </section>
            </main>
            <footer></footer>
        </div>
    )
}

export default Layout