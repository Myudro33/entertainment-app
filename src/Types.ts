



export interface TrendingCardProps{
  category?:string,
  isTrending?:boolean,
  isBookmarked?:boolean,
  rating?:string,
  thumbnail?:{
    regular?:{
      large?:string,
      medium?:string
      small?:string  
    },
    trending?:{
      large?:string,
      small?:string
    }
  },
  title?:string,
  year?:number
  setbookmarkedData?:React.Dispatch<React.SetStateAction<{}[]>>,

}
export interface HomeProps {
  data: {}[];
  store: {}[];
  setstore:React.Dispatch<React.SetStateAction<{}[]>>
  value:string
}
export interface RightSideProps{
    value:string,
    setvalue:React.Dispatch<React.SetStateAction<string>>;
    data:{}[],
    page:string
    setstore:React.Dispatch<React.SetStateAction<{}[]>>
}
export interface InputTypes {
  value: string;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
}
