//this is the file we see on localhost 3000
import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import requests from '../utils/requests';

// this is the client side
export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}

      <Header />

      {/* NavBar */}

      <Navbar />

      {/* Results */}

      <Results results={results} />
    </div>
  );
}

// following is server side

export async function getServerSideProps(context) {
  const genre = context.query.genre || 'fetchTrending';
  //used to get query from url
  const request = await fetch(`
    https://api.themoviedb.org/3${requests[genre].url}
  `).then((response) => response.json());

  return {
    props: {
      results: request.results, //the info is on the server side
    },
  };
}
