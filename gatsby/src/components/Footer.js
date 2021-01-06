import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { IconContext } from "react-icons";

const FooterStyles = styled.footer`
    margin-top: 2em;
    padding-top: 2em;
    padding-bottom: 2em;
    background-color: var(--cool-gray-300);

    p {
        text-align: center;
        color: var(--cool-gray-600);
    }
    div {
        width: 80%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2em;
    }
    .round {
        border-radius: 50%;
        padding: 0.75em;
        filter: drop-shadow(0 0.1em 0.25em gray);
        transition: all 0.2 ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }

    .black {
        background-color: var(--black);
    }

    .blue {
        background-color: var(--blue);
    }
`;

export default function Footer(){
    return (
        <FooterStyles>
            <p>&copy; VCU Triangle {new Date().getFullYear()}</p>
            <p>
                <a href="https://triangle.secure.force.com/pmtx/dn8n__SiteDonation?id=a1t2I000007eJY5" className="button">
                    Donate to the VCU CEF
                </a>
            </p>
            <div>
                <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                    <a href="https://instagram.com/triangle_vcu" aria-label="Instagram Link" className="round black" target="_blank" rel="noopener">
                        <FaInstagram/>
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                    <a href="https://www.facebook.com/trianglevcu/" aria-label="Facebook Link" className="round blue" target="_blank" rel="noopener">
                        <ImFacebook/>
                    </a>
                </IconContext.Provider>
            </div>
        </FooterStyles>
    )
}