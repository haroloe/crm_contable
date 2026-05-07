import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: { role: string } & Session['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT { role?: string }
}
