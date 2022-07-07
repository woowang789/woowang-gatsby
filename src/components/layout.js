import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import { container, heading } from './layout.module.css'
import Navi from './navi'

function Layout({ pageTitle, children }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <>
            <Navi></Navi>
            <div className={container}>
                <title>
                    {pageTitle} | {data.site.siteMetadata.title}
                </title>
                {/* <header>{data.site.siteMetadata.title}</header> */}

                <main>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
                </main>

                {/* <div>Copyright All Rights</div> */}
            </div>
        </>
    )
}

export default Layout
