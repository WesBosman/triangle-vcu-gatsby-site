import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

export default function SEO({ children, location, description, title, image }){
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
        }
    `);
    return (
        <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
            <html lang="en"/>

            <title>{title}</title>

            <meta charset="utf-8"/>
            <meta name="description" content={site.siteMetadata.description}/>

            <link rel="icon" href="/favicon.ico"/>

            {location && <meta property="og:url" content={location.href}/>}
            <meta property="og:image" content={image || '/vcu_triangle_logo.svg'}/>
            <meta property="og:title" content={title} key="ogtitle"/>
            <meta property="og:site_name" content={site.siteMetadata.title} key="ogsitename"/>
            <meta property="og:description" content={description} key="ogdescription"/>
            {children}
        </Helmet>
    );
}