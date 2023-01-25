import React from "react";
import {
  RecomendedContainer,
  RecomendedWrapper,
  TrendingTitle,
} from "../Styled";
import { TrendingCardProps } from "../Types";
import MovieCard from "./MovieCard";

interface PageProps {
  data: {}[];
  page: string;
}

const Page = ({ data, page }: PageProps) => {
  return (
    <RecomendedContainer>
      <TrendingTitle>{page}</TrendingTitle>
      <RecomendedWrapper>
        {data.map((movie: TrendingCardProps) => (
          <MovieCard
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
  );
};

export default Page;
