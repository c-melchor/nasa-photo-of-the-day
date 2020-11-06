import React from "react";
import styled from "styled-components";

const StyledParagraphDiv = styled.div`
  font-size: ${pr => pr.theme.fontSize.paragraph};
  text-align: ${pr => pr.theme.textAlign.paragraph};
  padding: ${pr => pr.theme.padding.small};
  width: ${pr => pr.theme.width.paragraph};
  margin: ${pr => pr.theme.margin};

  &:hover {
    text-transform: ${pr => pr.theme.textTransform};
  }
`;

export default function Description(props) {
  const { paragraph } = props;

  return (
    <StyledParagraphDiv>
      <p>{paragraph}</p>
    </StyledParagraphDiv>
  );
}
