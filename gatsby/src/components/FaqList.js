import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.li`
    h3 {
        color: var(--rose);
    }
    p {
        color: var(--cool-gray-600);
    }
`;

export default function FaqList({ list }) {
    return <ol type="1">
        {
            list.map((x, index) => {
                return (
                <ListStyle key={index}>
                    <h3>{x.question}</h3>
                    <p>{x.answer}</p>
                </ListStyle>)
            })
        }
    </ol>
}