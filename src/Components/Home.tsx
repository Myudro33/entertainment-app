import React from "react";
import {
  HomeContainer,
  TrendingContainer,
  TrendingSwiper,
  TrendingTitle,
  RecomendedContainer,
  RecomendedWrapper
} from "../Styled";
import { HomeProps, TrendingCardProps } from "../Types";
import TrendingCard from "./TrendingCard";

const Home = ({ store, data }: HomeProps) => {
  console.log(data);

  return (
    <HomeContainer>
      <TrendingContainer>
        <TrendingTitle>Trending</TrendingTitle>
        <TrendingSwiper>
          {data.map((trend: TrendingCardProps) => (
            <TrendingCard
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
        
      </RecomendedWrapper>
      </RecomendedContainer>
    </HomeContainer>
  );
};

export default Home;
