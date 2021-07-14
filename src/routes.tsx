import React from "react";
import styled from "styled-components";

// import { Container } from './styles';

const Router = () => {
  return (
    <>
      <Container>
        <PageTitle>Promoção</PageTitle>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa
          expedita, suscipit aspernatur laborum incidunt natus libero totam
          excepturi ratione aliquam tempora obcaecati, ut sit deserunt
          repudiandae debitis molestias ad?
        </Description>
        <Wrapper>
          <EmailInput placeholder="digite seu email"></EmailInput>
          <Button>Send</Button>
        </Wrapper>
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
const PageTitle = styled.div`
  height: 300px;
  color: #f75b30;
  font-size: 200px;
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  color: white;
  padding: 0 320px;
  text-align: center;
  border: auto;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: white;
  color: #59363d;
  margin: 5px;
`;
const EmailInput = styled.input`
  background-color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
`;
