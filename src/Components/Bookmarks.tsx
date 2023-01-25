import React from "react";
import {
  RecomendedContainer,
  RecomendedWrapper,
  TrendingTitle,
} from "../Styled";
import { TrendingCardProps } from "../Types";
import MovieCard from "./MovieCard";

interface BookmarkProps {
  bookmarkedData: {}[];
  setbookmarkedData: React.Dispatch<any>;
}

const Bookmarks = ({ bookmarkedData, setbookmarkedData }: any) => {
  const bookmarkedMovies = bookmarkedData.filter(
    (item) => item.category === "Movie" && item.isBookmarked === true
  );
  const bookmarkedSeries = bookmarkedData.filter(
    (item) => item.category !== "Movie" && item.isBookmarked === true
  );

  return (
    <>
      <RecomendedContainer>
        <TrendingTitle>Bookmarked Movies</TrendingTitle>
        <RecomendedWrapper>
          {bookmarkedMovies.map((movie: TrendingCardProps) => (
            <MovieCard
              setbookmarkedData={setbookmarkedData}
              key={movie.title}
              category={movie.category}
              isTrending={movie.isTrending}
              rating={movie.rating}
              thumbnail={movie.thumbnail}
              title={movie.title}
              year={movie.year}
              isBookmarked={movie.isBookmarked}
            />
          ))}
        </RecomendedWrapper>
      </RecomendedContainer>
      <RecomendedContainer>
        <TrendingTitle>Bookmarked TV Series</TrendingTitle>
        <RecomendedWrapper>
          {bookmarkedSeries.map((movie: TrendingCardProps) => (
            <MovieCard
              setbookmarkedData={setbookmarkedData}
              key={movie.title}
              category={movie.category}
              isTrending={movie.isTrending}
              rating={movie.rating}
              thumbnail={movie.thumbnail}
              title={movie.title}
              year={movie.year}
              isBookmarked={movie.isBookmarked}
            />
          ))}
        </RecomendedWrapper>
      </RecomendedContainer>
    </>
  );
};

export default Bookmarks;
