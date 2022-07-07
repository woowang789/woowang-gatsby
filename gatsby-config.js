module.exports = {
    siteMetadata: {
        title: `My First Gatsby`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-transformer-sharp',
    ],
}
