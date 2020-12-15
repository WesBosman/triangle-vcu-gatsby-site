import dotenv from 'dotenv';

const path = require('path');

dotenv.config({ path: '.env'});

export default {
    siteMetadata: {
        title: `Triangle VCU`,
        siteUrl: 'https://trianglevcu.org',
        description: 'The Triangle chapter at Virginia Commonwealth University'
    },
    plugins: [
        // "gatsby-plugin-react-helmet",
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: 'gpmpstw3',
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `images`,
                path: path.join(__dirname, `/src/assets/images`)
            }
        }
    ]
}