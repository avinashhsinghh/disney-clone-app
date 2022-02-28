import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import { Session } from 'inspector';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { db } from '../../../firebase';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECERET,
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});
