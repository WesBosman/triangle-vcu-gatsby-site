import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const links = [
    {
        class: 'one',
        route: '/',
        name: 'Home'
    },
    // {
    //     class: 'two',
    //     route: '/about',
    //     name: 'About'
    // },
    {
        class: 'three',
        route: '/scholarships',
        name: 'Scholarships'
    },
    // {
    //     class: 'four',
    //     route: '/store',
    //     name: 'Store'
    // },
];

// Experiment with a moving hr under nav links
const linkCss = () => {
    let styles = links.map((x, index) => {
        return `
            .${x.class}:hover ~ hr {
                margin-left: ${index * 100}%;
            }
        `
    }).join('')

    return styles
}

const NavStyles = styled.nav`
    margin-bottom: 3rem;
    background-color: var(--rose);
    
    ul {
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
        text-align: center;
        align-items: center;
        padding-inline-start: 0px;
        margin: auto;
        max-width: 80%;
    }
    
    li {
        transform: opacity(0.5);
        padding-top: 1em;
        padding-bottom: 1em;
    }

    a {
        text-decoration: none;
        color: var(--cool-gray-300);

        &:hover {
            color: var(--white);
        }

        &.active {
            color: var(--white);
        }

        &.active ~ hr {
            margin-left: 300%;
        }
    }
    .underline {
        background-image: linear-gradient(120deg, var(--yellow) 0%, var(--rose) 100%);
        background-repeat: no-repeat;
        background-size: 100% 0.2em;
        background-position: 0 90%;
        transition: background-size 0.2s ease-in;

        &:hover {
            background-size: 10% 90%;
        }
    }
`;

export default function Nav(){
    return (
        <NavStyles>
            <ul>
                {links.map((x, index) => {
                    return (
                        <li key={index} className={x.class}>
                            <Link to={x.route} activeClassName="active">{x.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </NavStyles>
    );
}