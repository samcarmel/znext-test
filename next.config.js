const path = require('path')
const NextBundleAnalyzer = require('@next/bundle-analyzer')

// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
const withSourceMaps = require('@zeit/next-source-maps')()


const basePath = ''

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withSourceMaps({
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  generateEtags: false, // possible caching issue: https://nextjs.org/docs/api-reference/next.config.js/disabling-etag-generation
  ...withBundleAnalyzer(),
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  basePath,
  future: {
    webpack5: true,
  },
})