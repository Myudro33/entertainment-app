import React from 'react'
import { RecomendedContainer, RecomendedWrapper, TrendingTitle } from '../Styled'
import { TrendingCardProps } from '../Types'
import MovieCard from './MovieCard'

const Bookmarks = ({data}:any) => {
    const bookmarkedMovies = data.filter((item)=>item.category==='Movie')
    const bookmarkedSeries = data.filter((item)=>item.category!=='Movie')
    
  return (
    <>
    <RecomendedContainer>
    <TrendingTitle>Bookmarked Movies</TrendingTitle>
    <RecomendedWrapper>
      {bookmarkedMovies.map((movie: TrendingCardProps) => (
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
  <RecomendedContainer>
    <TrendingTitle>Bookmarked TV Series</TrendingTitle>
    <RecomendedWrapper>
      {bookmarkedSeries.map((movie: TrendingCardProps) => (
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
  </>

  )
}

export default Bookmarks