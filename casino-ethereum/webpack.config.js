const path = require('path')
module.exports = { 
   entry: path.join(__dirname, 'src/js', 'index.js'), // 我们的前端将在 src 文件夹中
   output: { 
      path: path.join(__dirname, 'dist' ), 
      filename: 'build.js' // 最终文件将在 dist/build.js 中创建
   }, 
   module: { 
      rules: [{ 
         test: /\.css$/, // 在 react 中加载 css
         使用: ['style-loader', 'css-loader'], 
         include: /src/ 
      }, { 
         test: /\.jsx?$/, // 加载js和jsx文件
         loader: 'babel-loader',
         排除：/node_modules/，
         查询：{
            预设：['es2015', 'react', '阶段-2'] 
         }
      }] 
   } 
}