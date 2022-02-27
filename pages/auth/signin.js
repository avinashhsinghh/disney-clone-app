import React from 'react';
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';
import Header from '../../components/Header';
import Image from 'next/image';
import Logo from '../../public/images/logo.svg';
import Cover from '../../components/Cover';

const signIn = ({ providers }) => {
  return (
    <>
      <Header />
      <Cover />
      {Object.values(providers).map((provider) => (
        <div className="flex items-center justify-center" key={provider.name}>
          <div
            className="absolute top-2/4 mx-auto -mt-20 flex w-full 
          max-w-screen-sm flex-col justify-center space-y-3 p-8"
          >
            <button
              className="w-full rounded bg-blue-500 px-6 py-4 text-xl
            font-extrabold tracking-wide hover:bg-blue-400"
              onClick={() =>
                SignIntoProvider(provider.id, { callbackUrl: '/' })
              }
            >
              SignIn with {provider.name}
            </button>
            <p className="text-center text-xs ">
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle will increase by $
            </p>
            <Image
              src="/images/cta-logo-two.png"
              width="600"
              height="70"
              objectFit="contain"
            />
          </div>
        </div>
      ))}
    </>
  );
};

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signIn;
