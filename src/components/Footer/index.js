import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRight,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Kurumsal </FooterLinkTitle>
              <FooterLink to="/">Hakkımızda</FooterLink>
              <FooterLink to="/">İnsan Kaynakları</FooterLink>
              <FooterLink to="/">Haberler</FooterLink>
              <FooterLink to="/">İletişim</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Hizmetlerimiz </FooterLinkTitle>
              <FooterLink to="/">Sahiplen</FooterLink>
              <FooterLink to="/bagis">Bağış Yap</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Barınaklar </FooterLinkTitle>
              <FooterLink to="/">Anlaşmalı Barınaklar</FooterLink>
              <FooterLink to="/">Anlaşmalı Barınak Olmak İstiyorum</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Kullanım </FooterLinkTitle>
              <FooterLink to="/">Kurallar</FooterLink>
              <FooterLink to="/">Site Haritası</FooterLink>
              <FooterLink to="/">Yardım ve İşlem Rehberi</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              barınaktan Al
            </SocialLogo>
            <WebsiteRight>
              Metehan Baş &copy; {new Date().getFullYear()} All Rights reserved.
            </WebsiteRight>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/metehan.bas.100"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/mettagn"
                target="_blank"
                arial-label="Instragram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                arial-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/metehanbas/"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
