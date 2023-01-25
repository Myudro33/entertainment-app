import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 280px;
  height: 200px;
  margin: 20px;
  position: relative;
  @media screen and (max-width: 770px) {
    width: 270px;
  }
`;

export const RecomendedWrapper = styled.div`
  width: 100%;
  height: 90%;
  flex-wrap: wrap;
  display: flex;
  @media screen and (max-width: 400px) {
    justify-content: center;
  }
`;
export const RecomendedContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const MovieTitle = styled.div`
  color: white;
  font-size: 20px;
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
`;
export const CardContainerBot = styled.div`
  position: absolute;
  width: 300px;
  height: 60px;
  bottom: 0;
  display: flex;
  padding: 5px;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    width: 150px;
  }
`;
export const PlayButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const PlayButtonWrapper = styled.div<any>`
  width: ${(props) => (props.small ? "100px" : "150px")};
  height: ${(props) => (props.small ? "40px" : "50px")};
  position: absolute;
  top: ${(props) => (props.small ? "30%" : "40%")};
  left: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: gray;
  opacity: 0.2;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    scale: 0.9;
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
export const BookmarkIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 0px 0px;
  cursor: pointer;
  &:active {
    scale: 0.9;
  }
`;

export const CardContainerTop = styled.div`
  width: 100%;
  height: 35px;
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TrendingCardContainer = styled.div`
  width: 470px;
  height: 230px;
  display: flex;
  margin: 0px 20px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 400px) {
    width: 260px;
    height: 130px;
  }
`;

export const TrendingTitle = styled.h1`
  color: white;
  font-size: 30px;
  margin: 10px 0px;
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;
export const TrendingSwiper = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  @media screen and (max-width: 400px) {
    height: 200px;
  }
`;

export const TrendingContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    height: 280px;
  }
`;
export const HomeContainer = styled.div`
  width: 100%;
  height: 700px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 80px;
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
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media screen and (max-width: 400px) {
    margin-top: 20px;
    padding: 0;
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
