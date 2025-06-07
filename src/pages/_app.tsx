import { CommandBar } from "@/components/CommandBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { globalStyles } from "@/styles/global";
import { Layout } from "@/styles/Layout";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";



globalStyles()
export default function App({ Component, pageProps }: AppProps) {


 
  return (
    <CommandBar>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://davidfelipe.dev',
            siteName: 'David Felipe Portfolio',
            images: [
               {
                  url: '/static/avatar.jpeg',
                  width: 1200,
                  height: 630,
                  alt: 'David Felipe',
                },
            ]
          }}
        />
      <Layout>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </Layout>
    </CommandBar>
  );
}
