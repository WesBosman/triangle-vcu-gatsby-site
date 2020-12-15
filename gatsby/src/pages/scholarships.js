import React from 'react';
import { graphql } from 'gatsby';
import FaqList from '../components/FaqList';
import styled from 'styled-components';

const SpanStyle = styled.span`
    color: var(--rose);
`;

const HrStyle = styled.hr`
    border-top: 1px solid var(--rose);
    margin-top: 2.5em;
`;

const RedBulletStyle = styled.ul`
    list-style: none;

    li{
      &:before {
        content: "•";
        color: var(--rose);
        font-weight: bold;
        display: inline-block;
        width: 1em;
        font-size: 1.2em; 
        margin-left: -1em; 
      }
    }
`;

export const query = graphql`
query MyQuery {
    scholarship: allSanityScholarship {
      nodes {
        faqarray {
          answer
          question
        }
        title {
          children {
            marks
            text
            _type
          }
        }
        internal {
          content
        }
      }
    }
  }
`;

export default function ScholarshipPage({ data }){
    const node = data.scholarship.nodes[0]
    const faqarray = node.faqarray
    
    return (
        <div>
            <h1>Scholarships</h1>
            <br/>
            <h3><SpanStyle>$1,000</SpanStyle> - VCU Triangle Leader Scholarship</h3>
            <small><em>Deadline to apply February 14, 2021</em></small>
            <br/>
            <br/>
            <h3>Requirements</h3>
            <RedBulletStyle>
                <li>Enrolled in STEM field</li>
                <li>Incomming Freshman, Sophomore or Transfer Student</li>
                <li>GPA >= <SpanStyle>3.0</SpanStyle></li>
            </RedBulletStyle>
            <br/>
            <a href="https://app.smarterselect.com/programs/70371-Triangle-Education-Foundation" className="button">
                Apply to Triangle Scholarship
            </a>
            <br/>
            <HrStyle/>
            <br/>
            <h3>FAQ</h3>
            <FaqList list={faqarray}/>        
        </div>
    );
}