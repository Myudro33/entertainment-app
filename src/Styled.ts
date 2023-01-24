import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  height: 80px;
  margin: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 400px) {
    height: 50px;
    width: 100%;
  }
`;

export const RightSideWrapper = styled.div`
  color: white;
  height: 100%;
  width: 90vw;
  padding: 20px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    margin-top: 20px;
  }
`;

export const SidebarItemWrapper = styled.div`
  height: 200px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 100px 0px;
  @media screen and (max-width: 400px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 200px;
  }
`;

export const SideBarStyled = styled.div`
  background-color: #161d2f;
  height: 100%;
  width: 100px;
  display: flex;
  border-radius: 15px;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 400px) {
    flex-direction: row;
    height: 50px;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    padding: 10px;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #10141e;
  @media screen and (max-width: 400px) {
    padding: 20px;
    flex-direction: column;
  }
`;
