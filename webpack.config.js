const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/, // .png 확장자로 마치는 모든 파일
      //   loader: "file-loader",
      //   options: {
      //     publicPath: "./dist/", // prefix를 아웃풋 경로로 지정
      //     name: "[name].[ext]?[hash]", // 파일명 형식
      //   },
      // },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: "url-loader", // url 로더를 설정한다
          options: {
            publicPath: "./dist/", // file-loader와 동일
            name: "[name].[ext]?[hash]", // file-loader와 동일
            limit: 10000, // 5kb 미만 파일만 data url로 처리
          },
        },
      },
    ],
  },
};
