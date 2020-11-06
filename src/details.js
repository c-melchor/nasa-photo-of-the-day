import React from "react";

//IMPORT STYLED-COMPONENTS USING npm install --save styled-components

import styled from "styled-components";

//declared styled component OUTSIDE of the function they serve
//OUTSIDEEEE OF FUNCTION!!!

//declare variable for what you're styling, then styling dot whatever element you want to replace, then the element you want to style
//invoking the function with the backticks, write style code inside backticks
//can type this like regular CSS
//dont forget semicolons

const StyledImageDiv = styled.div`
  background-color: ${pr => pr.theme.tertiaryColor};
  padding: ${pr => pr.theme.padding.medium};
  &:hover {
    opacity: 0.2;
    transition: opacity 1s;
  }
  transition: opacity 1s;
`;

const StyledImageTitle = styled.h2`
  color: ${pr => pr.theme.lightestColor};
  text-shadow: ${pr => pr.theme.textShadow};
  font-size: ${pr => pr.theme.fontSize.imageTitle};
`;

export default function Details(props) {
  const { title, imgSrc } = props;

  return (
    <StyledImageDiv>
      <StyledImageTitle>{title}</StyledImageTitle>
      <img id="img-id" src={imgSrc} alt=" Outer space" />
    </StyledImageDiv>
  );
}
