import React, { ReactElement } from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const gtag = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-17058943-8');
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-17058943-8"
          />
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={{ __html: gtag }} />
          <meta charSet="utf-8" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS feed for blog posts"
            href={`${process.env.baseUrl}/rss.xml`}
          />
          <link key="favicon" rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
