import Head from "next/head";
import { styled } from "../../stitches.config";
import { useState } from "react";


const Button = styled('button', {
  backgroundColor: '$gray400',
  borderRadius: '9999px',
  fontSize: '13px',
  fontFamily: '$jetbrains_mono',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

export default function Home() {

  const [ count, setCount ] = useState(0)

  return (
    <>
      <Head>
        <title>David Felipe | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>

        <h1>Hello world</h1>
        <Button onClick={() => setCount(state => state + 1)}>Clickd: {count}</Button>
        
      </div>
    </>
  );
}
