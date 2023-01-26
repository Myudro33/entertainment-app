import React, { useEffect } from "react";
import {
  HomeContainer,
  TrendingContainer,
  TrendingSwiper,
  TrendingTitle,
  RecomendedContainer,
  RecomendedWrapper,
} from "../Styled";
import { HomeProps, TrendingCardProps } from "../Types";
import MovieCard from "./MovieCard";
import TrendingCard from "./TrendingCard";

const Home = ({ store, data,setstore,value }: HomeProps) => {



useEffect(()=>{
  setstore(data.filter((item:any)=>item.title.startsWith(value)))
},[value])

  return (
    <HomeContainer>
      <TrendingContainer>
        <TrendingTitle>Trending</TrendingTitle>
        <TrendingSwiper>
          {data.map((trend: TrendingCardProps) => (
            <TrendingCard
            key={trend.title}
              category={trend.category}
              isTrending={trend.isTrending}
              rating={trend.rating}
              thumbnail={trend.thumbnail}
              title={trend.title}
              year={trend.year}
              isBookmarked={trend.isBookmarked}
            />
          ))}
        </TrendingSwiper>
      </TrendingContainer>
      <RecomendedContainer>
        <TrendingTitle>Recomended</TrendingTitle>
        <RecomendedWrapper>
          {store.map((movie: TrendingCardProps) => (
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
    </HomeContainer>
  );
};

export default Home;
