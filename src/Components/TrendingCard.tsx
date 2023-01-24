import React, { useState } from "react";
import {
  TrendingCardContainer,
  CardContainerTop,
  BookmarkIconWrapper,
  PlayButtonWrapper,
  PlayButton,
  CardContainerBot,
  MovieTitle,
} from "../Styled";
import { TrendingCardProps } from "../Types";
import bookmarked from "../assets/icon-bookmark-empty.svg";
import notBookmarked from "../assets/icon-bookmark-full.svg";
import playIcon from "../assets/icon-play.svg";

const TrendingCard = ({
  title,
  category,
  isTrending,
  rating,
  thumbnail,
  year,
  isBookmarked,
}: TrendingCardProps) => {
  const key = process.env.REACT_APP_IMAGE_API_KEY;

  const [show, setshow] = useState(false);

  return (
    <TrendingCardContainer
      onMouseEnter={() => setshow(true)}
      onMouseLeave={() => setshow(false)}
    >
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={`${key}${thumbnail?.regular.large}`}
        alt="trending img"
      />
      <CardContainerTop>
        <BookmarkIconWrapper>
          <img
            style={{ width: "15px", height: "20px", margin: "0px 5px" }}
            src={isBookmarked ? notBookmarked : bookmarked}
            alt=""
          />
        </BookmarkIconWrapper>
      </CardContainerTop>
      {show && (
        <PlayButtonWrapper>
          <PlayButton>
            <img src={playIcon} alt="playicon" />
            <h3>Play</h3>
          </PlayButton>
        </PlayButtonWrapper>
      )}
      <CardContainerBot>
        <p
          style={{ fontSize: "14px" }}
        >{`${year} · ${category} · ${rating}`}</p>
        <MovieTitle>{title}</MovieTitle>
      </CardContainerBot>
    </TrendingCardContainer>
  );
};

export default TrendingCard;
