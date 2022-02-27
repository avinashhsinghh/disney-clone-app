import Image from 'next/image';
import React from 'react';
import Logo from '../public/images/logo.svg';
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from '@heroicons/react/solid';
import { signIn, useSession, signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  return (
    <header
      className="sticky top-0 z-[1000] flex h-[72px] 
      items-center bg-[#040714] 
      px-10 md:px-12"
    >
      <Image
        src={Logo}
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push('/')}
      />
      {session && (
        <div className="ml-10 hidden items-center space-x-6 md:flex">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {session && (
        <img
          src={session.user.image}
          className="ml-auto h-12 w-12 cursor-pointer rounded-full object-cover"
          onClick={signOut}
        />
      )}
      {session && (
        // <div className="mr-2 flex">
        <button
          className="ml-4 rounded border px-2 py-1.5 
         tracking-wide transition duration-200
        hover:bg-white hover:text-black"
          onClick={signOut}
        >
          SignOut
        </button>
        // </div>
      )}
    </header>
  );
};

export default Header;
