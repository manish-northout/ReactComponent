var config = {
   entry: './src/index.js',
	
   output: {
      path:'/public/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 3000
   },
   node:{
	    "child_process": "empty"
	},
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
