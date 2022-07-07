import React from 'react'
import {
    navHead,
    navLinks,
    navLinkItem,
    navLinkText,
    navArea,
    full,
} from './navi.module.css'
import { Link } from 'gatsby'

function Navi() {
    return (
        <>
            <nav className={navArea}>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navHead} to="/">
                            Woowang
                        </Link>
                    </li>
                    <div className={full}></div>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/about">
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navi
