const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:39558', // Your backend URL
        changeOrigin: true,
        secure: false,
        // pathRewrite: { '^/api': '' }, // Optional: Remove '/api' prefix
      },
    },
  },
})

// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://localhost:44321', // Your backend URL
//         changeOrigin: true,
//         pathRewrite: { '^/api': '' }, // Optional: Remove '/api' prefix
//       },
//     },
//   },
// };
