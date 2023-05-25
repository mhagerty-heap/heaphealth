import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === "ar" ? "rtl" : "ltr";
    return (
      <Html dir={dir} lang={locale}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/images/favicon.png"></link>

                      <script
                        type="text/javascript"
                        async
                        dangerouslySetInnerHTML={{
                          __html: `
          					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          					})(window,document,'script','dataLayer','GTM-P5GDRTC')`,
                        }}
                      />

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
