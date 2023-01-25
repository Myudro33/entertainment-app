import React, { useState } from "react";
import {
  BookmarkIconWrapper,
  CardContainerBot,
  CardContainerTop,
  MovieCardContainer,
  MovieTitle,
  PlayButton,
  PlayButtonWrapper,
} from "../Styled";
import { TrendingCardProps } from "../Types";
import bookmarked from "../assets/icon-bookmark-empty.svg";
import notBookmarked from "../assets/icon-bookmark-full.svg";
import playIcon from "../assets/icon-play.svg";

const MovieCard = ({
  category,
  isBookmarked,
  isTrending,
  rating,
  thumbnail,
  title,
  year,
}: TrendingCardProps) => {
  const [show, setshow] = useState(false);

  return (
    <MovieCardContainer
      onMouseEnter={() => setshow(true)}
      onMouseLeave={() => setshow(false)}
    >
      <CardContainerTop>
        <BookmarkIconWrapper>
          <img
            style={{ width: "15px", height: "20px", margin: "0px 5px" }}
            src={isBookmarked ? notBookmarked : bookmarked}
            alt=""
          />
        </BookmarkIconWrapper>
      </CardContainerTop>
      <img
        style={{ width: "100%", height: "70%", objectFit: "cover" }}
        src={`${process.env.REACT_APP_IMAGE_API_KEY}${thumbnail?.regular.large}`}
        alt="trending img"
      />
      {show && (
        <PlayButtonWrapper small>
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
    </MovieCardContainer>
  );
};

export default MovieCard;
