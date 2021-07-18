import React from "react";
import styled from "styled-components";
import cooktop from "../assets/images/cooktop.webp";
import liquidificador from "../assets/images/liquidificador.webp";
import geladeira from "../assets/images/geladeira.webp";
import microOndas from "../assets/images/micro-ondas.webp";
import fritadeira from "../assets/images/fritadeira.webp";

type Product = { img: string; description: string; price: number };

const products: Array<Product> = [
  {
    img: cooktop,
    description: "Cooktop 4 bocas, blala lk dkasas lda slkj",
    price: 21,
  },
  {
    img: liquidificador,
    description: "liquidificador, iducih qwhu qhidhq uiwhd qhw",
    price: 21,
  },
  {
    img: geladeira,
    description: "Geladeira hsui qhwu idh quiwhduiqw hdqhwu idh",
    price: 21,
  },
  {
    img: fritadeira,
    description: "liquidificador iyasgyugq yhdw duvgqw yhudqw hdqw",
    price: 21,
  },
  {
    img: microOndas,
    description: "micro ondar oiunh qw ohadhas dausdh ahidhuias",
    price: 21,
  },
];

const Cards: React.FC = () => {
  return (
    <>
      {products.map((produto) => (
        <Card>
          <Description>{produto.description}</Description>
          <Img src={produto.img}></Img>
          <Price>R${produto.price}</Price>
        </Card>
      ))}
    </>
  );
};

export default Cards;

const Card = styled.div`
  max-width: 15%;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  background-color: black;
  width: 100%;
`;
const Price = styled.div`
  background-color: orange;
  min-width: 50%;
  margin: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  font-size: 1.3rem; ;
`;
const Description = styled(Price)`
  border-radius: 5px;
`;
