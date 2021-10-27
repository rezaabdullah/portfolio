import * as React from "react"
import {
    Nav_wrapper,
    logo_wrapper,
    Nav_wrapper__ul
} from "./ui/layouts/_navigation.module.scss"

const Navbar = () => {
    return (
        <nav className={Nav_wrapper}>
            <div className={logo_wrapper}>
                A|R
            </div>
            <ul className={Nav_wrapper__ul}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Blogs</a></li>
            </ul>
        </nav>
    )
}

export default Navbar

