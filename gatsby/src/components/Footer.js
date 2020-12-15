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
            <div>
                <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                    <a href="https://instagram.com/triangle_vcu" className="round black">
                        <FaInstagram/>
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                    <a href="https://www.facebook.com/trianglevcu/" className="round blue">
                        <ImFacebook/>
                    </a>
                </IconContext.Provider>
            </div>
        </FooterStyles>
    )
}