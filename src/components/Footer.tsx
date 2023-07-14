import React from "react";
import {
  FooterWrapper,
  FooterContent,
  FooterParagraph,
  FooterLink,
} from "../styles/Footer.style";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterParagraph data-test="footer-copyright">
          {t("Copyright")}
        </FooterParagraph>
        <FooterParagraph>
          {t("GitPlug")}{" "}
          <FooterLink href="https://github.com/oddpharmacy">
            oddpharmacie
          </FooterLink>
        </FooterParagraph>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
