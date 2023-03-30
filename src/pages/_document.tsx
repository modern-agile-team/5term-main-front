import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const originalRenderPage = context.renderPage;
    const sheet = new ServerStyleSheet();

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } catch (error) {
      throw error;
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;
