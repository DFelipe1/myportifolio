import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../../stitches.config";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head >
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
