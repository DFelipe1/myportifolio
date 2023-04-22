import { Client, cacheExchange, fetchExchange } from 'urql';

export const client = new Client({
    url: import.meta.env.VITE_API,
    exchanges: [cacheExchange, fetchExchange],
  });