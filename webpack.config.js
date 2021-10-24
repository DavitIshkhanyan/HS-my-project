const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

{/* specify the entry and bundled file and path */}
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

// module.exports = {
//     entry: ['./src/index.js'],
//     output: {
//         path: path.join(__dirname, '/dist'),
//         filename: 'vendor.js'
//     },
//     module: {
//         rules: [
//             {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
//             // {test: /\.css$/, use: ['style-loader', 'css-loader']}
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html'
//         })
//     ]
// };


// {
//     "name": "node_server",
//     "version": "1.0.0",
//     "description": "Api by node_server",
//     "main": "index.js",
//     "scripts": {
//       "start": "webpack-dev-server --mode development --open --hot",
//       "build": "webpack --mode production"
//     },
//     "author": "Davit Ishkhanyan",
//     "license": "ISC",
//     "devDependencies": {
//       "@babel/cli": "^7.2.3",
//       "@babel/core": "^7.4.0",
//       "@babel/plugin-proposal-class-properties": "^7.4.0",
//       "@babel/polyfill": "^7.4.3",
//       "@babel/preset-env": "^7.4.2",
//       "@babel/preset-react": "^7.0.0",
//       "@babel/register": "^7.4.0",

//       "babel-loader": "^8.2.2",
//       "babel-present-env": "^1.7.0",
//       "babel-present-react": "^6.24.1",

//       "babel-eslint": "^10.0.1",
//       "css-loader": "^2.1.1",
//       "eslint": "^5.15.3",
//       "eslint-plugin-react": "^7.12.4",
//       "nodemon": "^1.18.10",
//       "npm-check": "^5.9.0",
//       "style-loader": "^0.23.1",
//       "webpack-cli": "^4.9.0",
//       "html-webpack-plugin": "^5.4.0",
//       "webpack": "^5.58.2",
//       "webpack-dev-server": "^4.3.1"
//     },
//     "dependencies": {
//       "react-redux": "6.0.1",
//       "redux": "4.0.1",
//       "axios": "^0.18.0",
//       "babel-loader": "^8.0.5",
//       "bootstrap": "^4.3.1",
//       "ejs": "^2.6.1",
//       "express": "^4.16.4",
//       "history": "^4.9.0",
//       "lodash.debounce": "^4.0.8",
//       "lodash.pickby": "^4.6.0",
//       "prop-types": "^15.7.2",
//       "react": "^16.4.1",
//       "react-dom": "^16.4.1",
//       "redux-saga": "^1.0.2",
//       "react-router-dom": "^5.0.0",
//       "webpack": "^4.29.6"
//     }
//   }
  