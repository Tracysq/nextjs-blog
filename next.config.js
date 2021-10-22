module.exports = {
  // reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  webpack: (config, options) => {
    const isServer = options.isServer
    config.module.rules.push({
      test: /\.(png|jpg|gif|jpeg|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'static',
            publicPath: '/_next/static'
          }
        }
      ],
    })

    return config
  },
}
