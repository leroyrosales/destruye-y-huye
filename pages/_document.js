import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <a href="#content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <body className="bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
