// // // const path = require('path');
// // // const common = require('./webpack.common.js');
// // // const { merge } = require('webpack-merge');

// // // module.exports = merge(common, {
// // //   mode: 'development',
// // //   module: {
// // //     rules: [
// // //       {
// // //         test: /\.css$/,
// // //         use: ['style-loader', 'css-loader'],
// // //       },
// // //     ],
// // //   },
// // //   devServer: {
// // //     static: path.resolve(__dirname, 'dist'),
// // //     open: false,
// // //     port: 9000,
// // //     client: {
// // //       overlay: {
// // //         errors: true,
// // //         warnings: true,
// // //       },
// // //     },
// // //   },
// // // });











// const path = require('path');
// const { HtmlRspackPlugin } = require('@rspack/plugin-html');
// const CopyPlugin = require('copy-webpack-plugin'); // CopyWebpackPlugin masih bisa digunakan

// module.exports = {
//   entry: {
//     app: path.resolve(__dirname, 'src/scripts/index.js'),
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true, // Membersihkan folder dist sebelum build (opsional)
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         type: 'asset/resource', // Mendukung aset statis seperti gambar
//       },
//     ],
//   },
//   plugins: [
//     new HtmlRspackPlugin({
//       template: path.resolve(__dirname, 'src/index.html'), // Template HTML
//     }),
//     new CopyPlugin({
//       patterns: [
//         {
//           from: path.resolve(__dirname, 'src/public/'), // Folder sumber
//           to: path.resolve(__dirname, 'dist/'), // Folder tujuan
//         },
//       ],
//     }),
//   ],
//   devServer: {
//     static: path.resolve(__dirname, 'dist'), // Direktori statis untuk development server
//     port: 3000, // Port untuk development server
//     open: true, // Membuka browser secara otomatis
//   },
// };