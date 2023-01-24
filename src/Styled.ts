import styled from "styled-components";

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
  background-color: #10141e;
  @media screen and (max-width: 400px) {
    padding: 20px;
  }
`;
