import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterContent = styled.div`
  margin: 15px 7%;
  padding: 2rem 4rem;
  background-color: hsl(43, 87%, 85%);
  border-radius: 40px;
  font-weight: bold;
  text-align: center;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: gray;

  &:hover {
    color: lightgray;
  }
`;

export const FooterParagraph = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;
