import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import { indexIntro, myLinks } from '../components/index.module.css'

const IndexPage = () => {
    return (
        <Layout>
            <div className={indexIntro}>
                <p>
                    안녕하세요.
                    <br />
                    개발자<span>왕종휘</span>입니다.
                </p>
                <div className={myLinks}></div>
                <StaticImage
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
                />
            </div>
        </Layout>
    )
}

export default IndexPage
