import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Brands from '../components/Brands';
import MoviesCollection from '../components/MoviesCollection';
import ShowsCollection from '../components/ShowsCollection';

export default function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}) {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>
          Disney+ | The streaming home of Disney, Pixar, Marvel, Star Wars, Nat
          Geo and Star
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Disney+ Hotstar is India’s largest premium streaming platform with more than 100,000 hours of drama and movies in 17 languages, and coverage of every major global sporting event."
        />
        <meta
          name="keywords"
          content="online tv streaming, online television, internet tv, watch tv on internet, Disney+ Hotstar, star player"
        />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          property="og:title"
          content="Disney+ Hotstar - Watch TV Shows, Movies, Specials, Live Cricket &amp; Football"
        ></meta>
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main className="relative min-h-screen after:absolute after:inset-0 after:z-[-1] after:bg-home after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat">
          <Slider />
          <Brands />
          <MoviesCollection results={popularMovies} title="Popular Movies" />
          <ShowsCollection results={popularShows} title="Popular Shows" />

          <MoviesCollection
            results={top_ratedMovies}
            title="Top Rated Movies"
          />
          <ShowsCollection results={top_ratedShows} title="Top Rated Shows" />
        </main>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
}
