import React from "react";
import styled, { keyframes } from "styled-components";

// import { Container } from './styles';

const Router = () => {
  return (
    <>
      <Container>
        <PageTitle>BLACK FRIDAY</PageTitle>

        {/* <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa
          expedita, suscipit aspernatur laborum incidunt natus libero totam
          excepturi ratione aliquam tempora obcaecati, ut sit deserunt
          repudiandae debitis molestias ad?
        </Description>
        <Wrapper>
          <EmailInput placeholder="digite seu email"></EmailInput>
          <Button>Send</Button> 
        </Wrapper>*/}
      </Container>
    </>
  );
};

export default Router;

const Container = styled.div`
  background-color: #383637;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const glow = keyframes`
 0% {
      color: #f75b30;
      text-shadow: none;
    }
    50% {
      color: #fff;
      text-shadow: 0 0 10px #f75b30, 0 0 15px #f75b30, 0 0 20px #f75b30,
        0 0 25px #f75b30, 0 0 30px #f75b30;
    }
    100% {
      color: #f75b30;
      text-shadow: none;
    }
`;
const PageTitle = styled.h1`
  height: 300px;
  color: #f75b30;
  font-size: 200px;
  font-style: italic;
  letter-spacing: 38px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0007);
  line-height: 2.2em;
  animation: ${glow} 5s linear infinite;
  /* @keyframes glow {
    0% {
      color: #f75b30;
      text-shadow: none;
    }
    50% {
      color: #fff;
      text-shadow: 0 0 10px #f75b30, 0 0 15px #f75b30, 0 0 20px #f75b30,
        0 0 25px #f75b30, 0 0 30px #f75b30;
    }
    100% {
      color: #f75b30;
      text-shadow: none;
    }
  } ; */
`;

// const Description = styled.p`
//   color: white;
//   padding: 0 320px;
//   text-align: center;
//   border: auto;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   background-color: white;
//   color: #59363d;
//   margin: 5px;
// `;
// const EmailInput = styled.input`
//   background-color: #fff;
// `;
// const Wrapper = styled.div`
//   display: flex;
// `;
// const AnimatedTitle = styled.h2`
//   color: white;
//   font-size: 100px;
// `;
