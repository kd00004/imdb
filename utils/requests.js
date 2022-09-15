// this file will be used have info like fetch top rated or fetch trending
const API_KEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
};
