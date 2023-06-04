import styled from "styled-components"

export const Title = styled.h1`
color:black;
&:hover {color:red};
&:before {content:"Title: "}
`


export const Explanation = styled.p`
font-size:1.5rem;
color:#aaa;
line-height: 150%;
`

export const Date = styled.p`
font-size:1rem;
color:black;
border-inline-color:red;
background-color:gray

`