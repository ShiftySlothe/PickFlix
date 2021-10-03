import axios from 'axios';

const imDbURL = process.env.IMBD_API_URL;
const imDbAPIKey = process.env.IMBD_API_KEY;

interface Top250MovieResponse {
  items: Top250MovieDetail[];
  errorMessage: string;
}

export interface Top250MovieDetail {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

export const getTop250Movies = async () => {
  const movies = await axios.get<Top250MovieResponse>(
    `https://imdb-api.com/en/API/Top250Movies/k_irdt36i9`,
  );
  console.log(movies.data);
  return movies.data;
};
