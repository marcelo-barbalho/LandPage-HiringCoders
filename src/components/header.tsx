import React from "react";
import styled from "styled-components";

type Nav = { title: string; link: string };

const menu: Array<Nav> = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "Lista de Desejos",
    link: "",
  },
  {
    title: "Entrar",
    link: "",
  },
];

const Header: React.FC = () => {
  return (
    <HeaderBar>
      <Container>
        <Title>Lojas Fictícia</Title>
        <MenuNav>
          {menu.map((item) => (
            <ItemNav onClick={() => console.log("estou funcionando")}>
              {item.title}
            </ItemNav>
          ))}
        </MenuNav>
      </Container>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.div`
  width: 100%;
  background: linear-gradient(#383637, #646263);
  color: #fff;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
const Title = styled.header`
  color: #fff;
  font-size: 2rem;
`;
const MenuNav = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemNav = styled.div`
  margin: 0 20px 0 20px;
  font-size: 1.6rem;
`;
