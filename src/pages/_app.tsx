import { globalStyles } from "@/styles/global";
import { Layout } from "@/styles/Layout";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";


globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://Feeh.dev',
            siteName: 'David Felipe Portfolio',
          }}
        />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
