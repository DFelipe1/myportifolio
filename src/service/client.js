import { Client, cacheExchange, fetchExchange } from 'urql';

export const client = new Client({
    url: 'https://api-sa-east-1.hygraph.com/v2/clgqs1fyq0fej01te9f0x3u3d/master',
    exchanges: [cacheExchange, fetchExchange],
  });