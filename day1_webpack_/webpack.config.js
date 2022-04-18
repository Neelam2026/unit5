const path=require("path")


module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"),//foldername
        filename:"bundle.js",//filename
    },
    mode:"development",
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpg|gif)$/i,
           use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
          }
        ],
      },
    
}