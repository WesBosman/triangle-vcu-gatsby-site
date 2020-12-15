import React from 'react';
import { graphql } from 'gatsby';
import { ImQuotesLeft } from 'react-icons/im';
import { GiTiedScroll, GiTriangleTarget } from 'react-icons/gi';
import { BsWrench } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { device } from '../styles/DeviceSizes';

const HeadingStyle = styled.h1`
    text-size: 4em;
    text-shadow: 1px 2px var(--cool-gray-300);
`;

const RedHeadingStyle = styled.h2`
    color: var(--rose);
`;

const ParagraphStyle = styled.p`
    color: var(--cool-gray-600);
`;

const GridStyle = styled.div`
    .flex {
        display: flex;
        flex: 1 1 auto;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;

        h3 {
            color: var(--white);
            text-shadow: 1px 2px var(--black);
        }

        p {
            color: var(--cool-gray-300);
        }
    }
    .item {
        width: 300px;
        background-color: var(--cool-gray-600);
        border-radius: 7px;
        padding: 1em;
        text-align: center;
    }
    .icon {
        background-color: var(--rose);
        padding: 1em;
        border-radius: 50%;
        border: 3px solid var(--cool-gray-300);
        margin-bottom: 1em;
        filter: drop-shadow(0 0.1em 0.2em var(--black));
    }
`;

const DivStyle = styled.div`
    display: flex;
    gap: 2em;
    margin-bottom: 2em;
    align-items: space-evenly;

    div {
        margin-top: 1em;
        width: 800px;
    }

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;

        img {
            height: 300px;
            width: auto;
        }
    }
`;

const DivStyleTwo = styled.div`
    display: flex;
    margin-bottom: 2em;
    gap: 2em;

    div {
        margin-top: 1em;
        width: 500px;
    }

    @media (max-width: 1024px){
        display: flex;
        flex-direction: column-reverse;
    }
`;

export const query = graphql`
  query {
    triangleChurch: file(relativePath: { eq: "triangle-church-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    triangleDelta: file(relativePath: { eq: "delta-t.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    },
  }
`

export default function HomePage({ data }) {
    console.log("Data: ", data);
    return (
        <div>
            <HeadingStyle>
                Triangle Fraternity at VCU
            </HeadingStyle>
            <small>
                <span className="rose">Engineers</span> | 
                <span className="rose">Architects</span> | 
                <span className="rose">Scientists</span>
            </small>

            <blockquote>
                <IconContext.Provider value={{ color: "var(--rose)", size: "1.5em" }}>
                    <ImQuotesLeft/>&nbsp;&nbsp;
                </IconContext.Provider>
                <p>
                To create a <em>Better World</em> we must first create a world of <em>Better Men</em>.
                </p>
                <br/>
                &nbsp;<small><em>-Herbert Scobie</em></small>
            </blockquote>
            
            <RedHeadingStyle>
                Who We Are
            </RedHeadingStyle>
            <DivStyle>
                <ParagraphStyle>
                    We are an organization of young men in the fields of engineering, science and architecture. 
                    Triangle men are students, doctors and professionals.
                    <br/>
                    <br/>
                    We are brothers.<br/>
                    We are gamers.<br/>
                    We are outdoors types that love hiking and the James River.<br/>
                    We are a large alumni network that will help you get a job straight out of college.
                </ParagraphStyle>
                <Img fluid={data.triangleChurch.childImageSharp.fluid}/>
            </DivStyle>

            
            <DivStyleTwo>
                <Img fluid={data.triangleDelta.childImageSharp.fluid}/>
                <div>
                    <RedHeadingStyle>
                        No Greek Letters
                    </RedHeadingStyle>
                    <ParagraphStyle>
                        Triangle Fraternity is one of three national fraternities that does not have traditional Greek letters.
                        <br/>
                        <br/>
                        Our name alludes to the engineering roots of our organization. 
                        A triangle is a fundamental component to any structure. 
                        It maintains it's strength and integrity and lasts for generations.
                    </ParagraphStyle>
                </div>
                
            </DivStyleTwo>
            

            <GridStyle>
                <div className="flex">
                    <div className="item">
                        <IconContext.Provider value={{ color: "var(--white)", size: "3em" }}>
                            <GiTiedScroll className="icon"/>
                        </IconContext.Provider>
                        <h3>Academic Excellence</h3>
                        <p>Let us help you achieve success inside and outside of the classroom</p>
                    </div>
                    <div className="item">
                        <IconContext.Provider value={{ color: "var(--white)", size: "3em" }}>
                            <GiTriangleTarget className="icon"/>
                        </IconContext.Provider>
                        <h3>Brotherhood</h3>
                        <p>Learn what is means to be a Triangle Brother</p>
                    </div>
                    <div className="item">
                        <IconContext.Provider value={{ color: "var(--white)", size: "3em" }}>
                            <BsWrench className="icon"/>
                        </IconContext.Provider>
                        <h3>Build Relationships</h3>
                        <p>Professionaly and Socially</p>
                    </div>
                </div>
            </GridStyle>
            

            <h2></h2>
            <p>

            </p>
        </div>
    );
}