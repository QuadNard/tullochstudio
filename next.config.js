/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    })

    return config
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withContentlayer(nextConfig)
