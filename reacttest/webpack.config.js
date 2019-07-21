var path=require("path");
module.exports={
    entry:"./app/test1/test.js",
    output:{
     path:path.resolve(__dirname,"./"),
     filename:"test.js"
   },
   mode : "development",
   module:{
   	rules:[
   	{
   		test:/\.js$/,
   		exclude:/node-modules/,
   		loader:"babel-loader",
   		query:{
   			presets:[
        'es2015','stage-0','react'
        ]}
   	},
   		{
   			test:/\.css$/,
   			exclude:/node-modules/,
   			loader:'style-loader!css-loader'
   		},
   		{
   			test:/\.jsx$/,
   			exclude:/node-modules/,
        loader:"babel-loader",
   			query:{
   				presets:['es2015','stage-0','react']
   			}
   		},
      {
        test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader:"url-loader?limit=8129&name=img/[name].[hash:8].[ext]"
      }


   	]
   }
},
plugin={
  $:"jquery",
  jQuery:"jquery",
  "window.jQuery":"jquery"
}
