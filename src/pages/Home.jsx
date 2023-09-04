import React from "react";
import { styled } from "styled-components";
import Input from "../components/Input";

const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Aside = styled.aside`
  width: 237px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: rgba(158, 158, 158, 1);
`;

const SecondContainer = styled.div`
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextButtons = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
`;

function Home() {
  return (
    <>
      <FirstContainer>
        <Aside>
          <ul>
            <span style={{ color: "orange" }}>Dev</span>challenges.io
          </ul>
          <ul>Colors</ul>
          <ul>Typography</ul>
          <ul>Spaces</ul>
          <ul>Buttons</ul>
          <ul style={{ color: "black" }}>Inputs</ul>
          <ul>Grid</ul>
        </Aside>
        <SecondContainer>
          <ContainerButtons>
            <ButtonDiv>
              <TextButtons>{`<Input/>`}</TextButtons>
              <Input placeHolder="default" label="Label"></Input>
            </ButtonDiv>
          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv>
              <TextButtons>{`<Input error/>`}</TextButtons>
              <Input placeHolder="default" label="Label" error></Input>
            </ButtonDiv>
          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv>
            <TextButtons>{`<Input disabled/>`}</TextButtons>
              <Input placeHolder="default" label="Label" disabled></Input>
            </ButtonDiv>
          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv>
            <TextButtons>{`<Input helperText='Some interesting text'/>`}</TextButtons>
              <Input placeHolder="default" label="Label" helperText='Some interesting text'></Input>
              
            </ButtonDiv>
            <ButtonDiv>
            <TextButtons>{`<Input  helperText='Some interesting text' error />`}</TextButtons>
              <Input placeHolder="default" label="Label" error helperText='Some interesting text'></Input>
              
            </ButtonDiv>
          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv></ButtonDiv>
          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv></ButtonDiv>
            <ButtonDiv></ButtonDiv>
          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv></ButtonDiv>
            <ButtonDiv></ButtonDiv>
            <ButtonDiv></ButtonDiv>
          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv></ButtonDiv>
            <ButtonDiv></ButtonDiv>
            <ButtonDiv></ButtonDiv>
            <ButtonDiv></ButtonDiv>
          </ContainerButtons>
        </SecondContainer>
      </FirstContainer>
    </>
  );
}

export default Home;
