import React from "react";
import styled from "styled-components";

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <FooterBar>
        <Contacts>
          <FooterTitle>Fale Conosco</FooterTitle>
          Telefones: (11)2255-2255, (11)2255-2255, (11)2255-2255
          Email:lojasficticia@ficticia.com.br sac@ficticia.com.br Twiter:
          @Ficticia Instagram:@Ficticia{" "}
        </Contacts>
        <Adresses>
          <FooterTitle>Nossas Lojas</FooterTitle>
          Rua Loren Loren nº36 loja A Rua Loren Loren nº36 loja A Rua Loren
          Loren nº36 loja A Rua Loren Loren nº36 loja A Rua Loren Loren nº36
          loja A
        </Adresses>
      </FooterBar>
    </>
  );
};

export default Footer;

const FooterBar = styled.footer`
  background: linear-gradient(#646263, #383637);
  width: 100%;
  color: #fff;
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
`;

const Contacts = styled.div`
  background-color: transparent;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: right;
  margin: 15px;
`;

const Adresses = styled(Contacts)``;
const FooterTitle = styled.p`
  color: red;
  margin: 5px 0 20px 0;
  border-bottom: 2px solid #fff;
`;
