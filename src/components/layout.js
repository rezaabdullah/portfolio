import * as React from "react"
import { Container,
    Nav_wrapper,
    logo_wrapper,
    Nav_wrapper__ul
} from "./ui/layout.module.scss"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={Container}>
            <nav className={Nav_wrapper}>
                <div className={logo_wrapper}>
                    A|R
                </div>
                <ul className={Nav_wrapper__ul}>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Blogs</li>
                </ul>
            </nav>
            <main></main>
            <footer></footer>
            {/* <nav class={nav-wrappper}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div>
                <title>{pageTitle}</title>
                    <main>
                        <h1>{pageTitle}</h1>
                        {children}
                    </main>
            </div>
            <footer>
                <p>This is a footer</p>
            </footer> */}
        </div>
    )
}

export default Layout