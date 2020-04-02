// This Apollo client will not be refactored to a TypeScript file
// Original source - https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { GOOGLE_ANALYTICS_TRACKING_ID } from '../src/analytics/googleAnalytics'

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}