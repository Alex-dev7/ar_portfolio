import styled from "styled-components"; 
import theme from "../json/theme.json"

export const BioContainer = styled.section`
text-align: center;
background-color: ${theme.color3};
color: ${theme.color2};
font-family: ${theme["text-font"]}};
width: 90%;
margin: auto;

`

export const BioImage = styled.img`
width: 20%;
object-fit: cover;
border-radius: 20px;
`