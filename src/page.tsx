import React from "react";
import styled, { keyframes } from "styled-components";
import Cards from "./components/card";
import Header from "./components/header";
import Footer from "./components/footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Title>Aquecimento</Title>
        <Banner>BLACK FRIDAY</Banner>
        <P>Nossas Promoções de aquecimento estão fervendo, venha conferir.</P>
        <Showcase>
          <Cards />
        </Showcase>
        <P>Nossas Promoções de aquecimento estão fervendo, venha conferir.</P>
        <Footer />
      </Container>
    </>
  );
};

export default LandingPage;

const Container = styled.div`
  background-color: #383637;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const P = styled.p`
  color: #fff;
  margin-top: 150px;
  margin-bottom: 100px;
  font-size: 2rem;
  width: 40%;
  text-align: center;
`;
const glow = keyframes`
 0% {
      color: #f75b30;
      text-shadow: none;
    }
    50% {
      color: #fff;
      text-shadow: 0 0 10px #f75b30, 0 0 20px #f75b30, 0 0 30px #f75b30,
        0 0 40px #f75b30, 0 0 50px #f75b30;
    }
    100% {
      color: #f75b30;
      text-shadow: none;
    }
`;
const Title = styled.div`
  color: #fff;
  font-size: 8vh;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const Banner = styled.h1`
  height: 30vh;
  color: #f75b30;
  font-size: 15vh;
  transform: rotate(-15deg);
  line-height: 2.2em;
  animation: ${glow} 5s linear infinite;
`;
const Showcase = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
`;
