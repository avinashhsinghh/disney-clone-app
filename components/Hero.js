import { signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Cover from './Cover';

const Hero = () => {
  return (
    <>
      <Cover />
      <div className="flex items-center justify-center">
        <div
          className="absolute top-2/4 mx-auto -mt-20 flex w-full 
        max-w-screen-sm flex-col justify-center space-y-3 p-8"
        >
          <button
            className="w-full rounded bg-blue-500 px-6 py-4 text-xl
          font-extrabold uppercase tracking-wide hover:bg-blue-400"
            onClick={signIn}
          >
            Get all there
          </button>
          <p className="text-center text-xs ">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $
          </p>
          <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
